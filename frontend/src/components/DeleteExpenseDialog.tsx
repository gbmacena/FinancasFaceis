"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

interface DeleteExpenseDialogProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  expenseTitle?: string;
}

export function DeleteExpenseDialog({
  open,
  onConfirm,
  onCancel,
  expenseTitle,
}: DeleteExpenseDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-400">
            <Trash className="w-5 h-5" />
            Remover Despesa
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Tem certeza que deseja remover{" "}
            {expenseTitle ? (
              <b className="text-white">{expenseTitle}</b>
            ) : (
              "esta despesa"
            )}
            ? Esta ação não poderá ser desfeita.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="ghost"
            onClick={onCancel}
            className="border border-slate-700 text-slate-300 hover:bg-slate-800"
          >
            Cancelar
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700"
          >
            Remover
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
