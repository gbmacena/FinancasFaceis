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
  const [transactionData, setTransactionData] = useState<
    Omit<Expense, "uuid" | "category"> & {
      categoryId?: number;
      formattedValue?: string;
    }
  >({
    type: "entrada",
    title: "",
    value: 0,
    formattedValue: "R$ 0,00",
    date: "",
    categoryId: undefined,
    installments: undefined,
    isRecurring: false,
    endDate: "",
  });
  const categories = useCategories();

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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" /> Nova Transação
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Adicionar Transação</DialogTitle>
            <DialogDescription>
              Preencha os detalhes da transação abaixo.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="tipo">Tipo</Label>
              <select
                id="tipo"
                value={transactionData.type}
                onChange={(e) =>
                  handleChange("type", e.target.value as "entrada" | "saida")
                }
                className="border rounded-md p-2"
                required
              >
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
              </select>
            </div>
            {transactionData.type === "saida" && (
              <div className="grid gap-2">
                <Label htmlFor="titulo">Título</Label>
                <Input
                  id="titulo"
                  placeholder="Ex: Aluguel, Mercado"
                  value={transactionData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  required
                />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="valor">Valor (R$)</Label>
              <Input
                id="valor"
                type="text"
                placeholder="R$ 0,00"
                value={transactionData.formattedValue || ""}
                onChange={(e) => handleValueChange(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="data">Data</Label>
              <Input
                id="data"
                type="date"
                value={transactionData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                required
              />
            </div>
            {transactionData.type === "saida" && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="categoria">Categoria</Label>
                  <select
                    id="categoria"
                    value={transactionData.categoryId || ""}
                    onChange={(e) =>
                      handleChange("categoryId", Number(e.target.value))
                    }
                    className="border rounded-md p-2"
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
                  <Label htmlFor="parcelas">Parcelas</Label>
                  <Input
                    id="parcelas"
                    type="number"
                    placeholder="Número de parcelas"
                    value={transactionData.installments || ""}
                    onChange={(e) =>
                      handleChange("installments", Number(e.target.value))
                    }
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
                  <Label htmlFor="recorrente">É recorrente?</Label>
                </div>
                {transactionData.isRecurring && (
                  <div className="grid gap-2">
                    <Label htmlFor="data-final">Data Final</Label>
                    <Input
                      id="data-final"
                      type="date"
                      value={transactionData.endDate}
                      onChange={(e) => handleChange("endDate", e.target.value)}
                    />
                  </div>
                )}
              </>
            )}
          </div>
          <DialogFooter>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
