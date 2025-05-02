"use client";

import { useState, useEffect } from "react";
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
import { Plus } from "lucide-react";

interface Category {
  id: number;
  name: string;
}

export function AddExpenseDialog({
  onExpenseAdded,
}: {
  onExpenseAdded: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number | undefined>();
  const [installments, setInstallments] = useState<number | undefined>();
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [endDate, setEndDate] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const mockCategories: Category[] = [
          { id: 2, name: "Alimentação" },
          { id: 3, name: "Transporte" },
          { id: 4, name: "Entretenimento" },
          { id: 5, name: "Outros" },
          { id: 6, name: "Saúde" },
          { id: 7, name: "Educação" },
          { id: 8, name: "Compras" },
          { id: 9, name: "Viagem" },
          { id: 10, name: "Investimentos" },
          { id: 11, name: "Dívidas" },
        ];
        setCategories(mockCategories);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = getItem<{ uuid: string; name: string }>("user");
      if (!user || !user.uuid) {
        throw new Error("Usuário não autenticado.");
      }

      const userId = user.uuid;

      await transactionService.createExpense(userId, {
        title,
        value,
        date,
        categoryId,
        installments,
        isRecurring,
        endDate: isRecurring ? endDate : undefined,
      });

      onExpenseAdded();

      toast.success("Gasto adicionado com sucesso!");

      setOpen(false);
    } catch (error) {
      console.error("Erro ao criar o gasto:", error);

      toast.error("Erro ao adicionar gasto. Tente novamente.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-3 rounded-md">
          <Plus className="h-7 w-7 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Adicionar Gasto</DialogTitle>
            <DialogDescription>
              Preencha os detalhes do gasto abaixo.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="titulo">Título</Label>
              <Input
                id="titulo"
                placeholder="Ex: Aluguel, Mercado"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="valor">Valor (R$)</Label>
              <Input
                id="valor"
                type="number"
                step="0.01"
                placeholder="0,00"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="data">Data</Label>
              <Input
                id="data"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="categoria">Categoria</Label>
              <select
                id="categoria"
                value={categoryId || ""}
                onChange={(e) => setCategoryId(Number(e.target.value))}
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
                value={installments || ""}
                onChange={(e) => setInstallments(Number(e.target.value))}
              />
            </div>
            <div className="flex items-center gap-2">
              <Input
                id="recorrente"
                type="checkbox"
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}
                className="w-4 h-4"
              />
              <Label htmlFor="recorrente">É recorrente?</Label>
            </div>
            {isRecurring && (
              <div className="grid gap-2">
                <Label htmlFor="data-final">Data Final</Label>
                <Input
                  id="data-final"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
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
