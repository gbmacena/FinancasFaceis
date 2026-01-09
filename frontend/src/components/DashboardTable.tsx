"use client";

import React, { useState } from "react";
import { Edit, Trash } from "lucide-react";
import { EditExpenseDialog } from "./EditExpenseDialog";
import { Expense, DashboardTableProps } from "@/types";

export const DashboardTable: React.FC<DashboardTableProps> = ({
  expenses,
  onEdit,
  onRemove,
}) => {
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

  return (
    <>
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-4 text-left text-slate-400 font-semibold text-sm">
                Título
              </th>
              <th className="p-4 text-left text-slate-400 font-semibold text-sm">
                Valor
              </th>
              <th className="p-4 text-left text-slate-400 font-semibold text-sm">
                Categoria
              </th>
              <th className="p-4 text-left text-slate-400 font-semibold text-sm">
                Data
              </th>
              <th className="p-4 text-center text-slate-400 font-semibold text-sm">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr
                key={expense.uuid}
                className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-all group"
                style={{
                  animation: `slideIn 0.3s ease-out ${index * 0.05}s both`,
                }}
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                      <span className="text-lg">
                        {expense.value > 0 ? "📈" : "📉"}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{expense.title}</p>
                      <p className="text-slate-500 text-xs">
                        {expense.value > 0 ? "Receita" : "Despesa"}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className={`font-bold text-lg ${
                      expense.value > 0 ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {expense.value > 0 ? "+" : ""} R${" "}
                    {Math.abs(expense.value).toFixed(2)}
                  </span>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm border border-slate-600">
                    {expense.category.name}
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-slate-400">
                    {new Date(expense.date).toLocaleDateString("pt-BR", {
                      timeZone: "UTC",
                    })}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => setEditingExpense(expense)}
                      className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all border border-blue-500/30 hover:scale-110"
                      title="Editar"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemove(expense.uuid)}
                      className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all border border-red-500/30 hover:scale-110"
                      title="Remover"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {editingExpense && (
        <EditExpenseDialog
          expense={editingExpense}
          onExpenseUpdated={() => {
            setEditingExpense(null);
            onEdit(editingExpense);
          }}
          onClose={() => setEditingExpense(null)}
        />
      )}
    </>
  );
};
