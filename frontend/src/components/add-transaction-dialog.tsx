"use client";

import type React from "react";
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
import { PlusCircle } from "lucide-react";
import transactionService from "@/services/transitionService";
import { getItem } from "@/utils/storage";
import { toast } from "sonner";

export function AddTransactionDialog({
  onTransactionAdded,
}: {
  onTransactionAdded: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number>(0);
  const [date, setDate] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = getItem<{ uuid: string; name: string }>("user");
      if (!user || !user.uuid) {
        throw new Error("Usuário não autenticado.");
      }

      const userId = user.uuid;

      const formattedDate = date.slice(0, 7);

      await transactionService.createEntry(userId, {
        value,
        date: formattedDate,
      });

      onTransactionAdded();

      toast.success("Entrada adicionada com sucesso!");

      setOpen(false);
    } catch (error) {
      console.error("Erro ao criar a entrada:", error);

      toast.error("Erro ao adicionar entrada. Tente novamente.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" /> Nova Entrada
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Adicionar Entrada</DialogTitle>
            <DialogDescription>
              Preencha os detalhes da entrada de dinheiro abaixo.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
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
          </div>
          <DialogFooter>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
