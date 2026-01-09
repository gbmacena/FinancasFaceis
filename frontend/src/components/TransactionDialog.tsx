"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import transactionService from "@/services/transitionService";
import { getItem } from "@/utils/storage";
import { toast } from "sonner";
import { PlusCircle } from "lucide-react";
import { Expense } from "@/types";
import { useCategories } from "@/hooks/useCategories";

export function TransactionDialog({
  onTransactionAdded,
}: {
  onTransactionAdded: () => void;
}) {
  const [open, setOpen] = useState(false);
  const initialFormState = {
    type: "entrada" as "entrada" | "saida",
    title: "",
    value: 0,
    formattedValue: "R$ 0,00",
    date: "",
    categoryId: undefined,
    installments: undefined,
    isRecurring: false,
    endDate: "",
  };
  const [transactionData, setTransactionData] = useState<
    Omit<Expense, "uuid" | "category"> & {
      categoryId?: number;
      formattedValue?: string;
    }
  >(initialFormState);
  const categories = useCategories();

  const resetForm = () => {
    setTransactionData(initialFormState);
  };

  const handleChange = <K extends keyof typeof transactionData>(
    field: K,
    value: (typeof transactionData)[K]
  ) => {
    setTransactionData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleValueChange = (value: string) => {
    const numericValue = value.replace(/\D/g, "");

    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(numericValue) / 100);

    setTransactionData((prev) => ({
      ...prev,
      value: Number(numericValue) / 100,
      formattedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!transactionData.value || transactionData.value <= 0) {
      toast.error("Valor inválido. Tente novamente.");
      return;
    }

    try {
      const user = getItem<{ uuid: string; name: string }>("user");
      if (!user || !user.uuid) {
        throw new Error("Usuário não autenticado.");
      }

      const userId = user.uuid;

      if (transactionData.type === "entrada") {
        await transactionService.createEntry(userId, {
          value: transactionData.value,
          date: transactionData.date,
        });
      } else {
        await transactionService.createExpense(userId, {
          title: transactionData.title,
          value: transactionData.value,
          date: transactionData.date,
          categoryId: transactionData.categoryId,
          installments: transactionData.installments ?? 1,
          isRecurring: transactionData.isRecurring,
          endDate: transactionData.isRecurring
            ? transactionData.endDate
            : undefined,
        });
      }

      onTransactionAdded();

      toast.success(
        transactionData.type === "entrada"
          ? "Entrada adicionada com sucesso!"
          : "Saída adicionada com sucesso!"
      );

      resetForm();
      setOpen(false);
    } catch {
      toast.error(
        `Erro ao adicionar ${
          transactionData.type === "entrada" ? "entrada" : "saída"
        }. Tente novamente.`
      );
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          resetForm();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/30">
          <PlusCircle className="h-5 w-5" /> Nova Transação
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-700">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-white">
              Adicionar Transação
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Preencha os detalhes da transação abaixo.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="tipo" className="text-white">
                Tipo
              </Label>
              <select
                id="tipo"
                value={transactionData.type}
                onChange={(e) =>
                  handleChange("type", e.target.value as "entrada" | "saida")
                }
                className="border border-slate-600 rounded-md p-2 bg-slate-800 text-white"
                required
              >
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
              </select>
            </div>
            {transactionData.type === "saida" && (
              <div className="grid gap-2">
                <Label htmlFor="titulo" className="text-white">
                  Título
                </Label>
                <Input
                  id="titulo"
                  placeholder="Ex: Aluguel, Mercado"
                  value={transactionData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  required
                  className="bg-slate-800 text-white border-slate-600"
                />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="valor" className="text-white">
                Valor (R$)
              </Label>
              <Input
                id="valor"
                type="text"
                placeholder="R$ 0,00"
                value={transactionData.formattedValue || ""}
                onChange={(e) => handleValueChange(e.target.value)}
                required
                className="bg-slate-800 text-white border-slate-600"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="data" className="text-white">
                Data
              </Label>
              <Input
                id="data"
                type="date"
                value={transactionData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                required
                className="bg-slate-800 text-white border-slate-600 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
              />
            </div>
            {transactionData.type === "saida" && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="categoria" className="text-white">
                    Categoria
                  </Label>
                  <select
                    id="categoria"
                    value={transactionData.categoryId || ""}
                    onChange={(e) =>
                      handleChange("categoryId", Number(e.target.value))
                    }
                    className="border border-slate-600 rounded-md p-2 bg-slate-800 text-white"
                    required
                  >
                    <option value="" disabled>
                      Selecione uma categoria
                    </option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="parcelas" className="text-white">
                    Parcelas
                  </Label>
                  <Input
                    id="parcelas"
                    type="number"
                    placeholder="Número de parcelas"
                    value={transactionData.installments || ""}
                    onChange={(e) =>
                      handleChange("installments", Number(e.target.value))
                    }
                    className="bg-slate-800 text-white border-slate-600"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    id="recorrente"
                    type="checkbox"
                    checked={transactionData.isRecurring}
                    onChange={(e) =>
                      handleChange("isRecurring", e.target.checked)
                    }
                    className="w-4 h-4"
                  />
                  <Label htmlFor="recorrente" className="text-white">
                    É recorrente?
                  </Label>
                </div>
                {transactionData.isRecurring && (
                  <div className="grid gap-2">
                    <Label htmlFor="data-final" className="text-white">
                      Data Final
                    </Label>
                    <Input
                      id="data-final"
                      type="date"
                      value={transactionData.endDate}
                      onChange={(e) => handleChange("endDate", e.target.value)}
                      className="bg-slate-800 text-white border-slate-600 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                    />
                  </div>
                )}
              </>
            )}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
            >
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
