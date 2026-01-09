"use client";

import { Button } from "@/components/ui/button";
import { PrinterIcon } from "lucide-react";
import { DashboardTable } from "@/components/DashboardTable";
import { Expense } from "@/types";

interface DashboardExpensesProps {
  expenses: Expense[];
  onEdit: () => void;
  onRemove: (expenseId: string) => void;
  onPrint: () => void;
}

export function DashboardExpenses({
  expenses,
  onEdit,
  onRemove,
  onPrint,
}: DashboardExpensesProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Transações</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-400">
            {expenses.length} registros
          </span>
          {expenses.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              className="text-slate-300 border-slate-600 hover:bg-slate-800 hover:text-white gap-2"
              onClick={onPrint}
            >
              <PrinterIcon className="w-4 h-4" />
              <span className="max-sm:hidden">Imprimir</span>
            </Button>
          )}
        </div>
      </div>

      {expenses.length > 0 ? (
        <DashboardTable
          expenses={expenses}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ) : (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">💸</span>
          </div>
          <p className="text-white text-xl font-bold mb-2">
            Nenhuma despesa registrada
          </p>
          <p className="text-slate-400 text-base mb-4">
            Este painel exibe apenas suas{" "}
            <span className="text-red-400 font-semibold">
              saídas de dinheiro
            </span>{" "}
            (despesas).
          </p>
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 max-w-md mx-auto mb-4">
            <p className="text-emerald-400 text-sm">
              💡 <span className="font-semibold">Dica:</span> As entradas
              (receitas) são registradas automaticamente no seu saldo, mas não
              aparecem nesta lista.
            </p>
          </div>
          <p className="text-slate-500 text-sm">
            Clique em{" "}
            <span className="text-emerald-400 font-semibold">
              &quot;Nova Transação&quot;
            </span>{" "}
            para adicionar sua primeira despesa
          </p>
        </div>
      )}
    </div>
  );
}
