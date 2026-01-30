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
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import transactionService from "@/services/transitionService";
import { toast } from "sonner";
import { EditExpenseDialogProps } from "@/types";
import { useCategories } from "@/hooks/useCategories";

export function EditExpenseDialog({
  expense,
  onExpenseUpdated,
  onClose,
}: EditExpenseDialogProps) {
  const [title, setTitle] = useState(expense.title);
  const [value, setValue] = useState(expense.value);
  const [date, setDate] = useState(expense.date.slice(0, 10));
  const [categoryId, setCategoryId] = useState<number | undefined>(
    expense.categoryId,
  );
  const categories = useCategories();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await transactionService.updateExpense(expense.uuid, {
        title,
        value,
        date,
        categoryId,
      });

      toast.success("Despesa atualizada com sucesso!");
      onExpenseUpdated();
      onClose();
    } catch {
      toast.error("Erro ao atualizar a despesa. Tente novamente.");
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-700">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-white">Editar Despesa</DialogTitle>
            <DialogDescription className="text-slate-400">
              Atualize os detalhes da despesa abaixo.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="titulo" className="text-white">
                Título
              </Label>
              <Input
                id="titulo"
                placeholder="Ex: Aluguel, Mercado"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="bg-slate-800 text-white border-slate-600"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="valor" className="text-white">
                Valor (R$)
              </Label>
              <Input
                id="valor"
                type="number"
                step="0.01"
                placeholder="0,00"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
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
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="bg-slate-800 text-white border-slate-600 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="categoria" className="text-white">
                Categoria
              </Label>
              <select
                id="categoria"
                value={categoryId || ""}
                onChange={(e) => setCategoryId(Number(e.target.value))}
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
          </div>
          <DialogFooter>
            <Button
              type="submit"
              disabled
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold opacity-60 cursor-not-allowed"
            >
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
