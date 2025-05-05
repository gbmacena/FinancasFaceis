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
      <div className="overflow-x-auto">
        {" "}
        <table className="w-full border-collapse border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <th className="border border-gray-200 dark:border-gray-700 p-3 text-left">
                Título
              </th>
              <th className="border border-gray-200 dark:border-gray-700 p-3 text-left">
                Valor
              </th>
              <th className="border border-gray-200 dark:border-gray-700 p-3 text-left">
                Categoria
              </th>
              <th className="border border-gray-200 dark:border-gray-700 p-3 text-left">
                Data
              </th>
              <th className="border border-gray-200 dark:border-gray-700 p-3 text-left">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr
                key={expense.uuid}
                className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="border border-gray-200 dark:border-gray-700 p-3">
                  {expense.title}
                </td>
                <td className="border border-gray-200 dark:border-gray-700 p-3">
                  R$ {expense.value.toFixed(2)}
                </td>
                <td className="border border-gray-200 dark:border-gray-700 p-3">
                  {expense.category.name}
                </td>
                <td className="border border-gray-200 dark:border-gray-700 p-3">
                  {new Date(expense.date).toLocaleDateString("pt-BR", {
                    timeZone: "UTC",
                  })}
                </td>
                <td className="border border-gray-200 dark:border-gray-700 p-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingExpense(expense)}
                      className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors flex items-center justify-center"
                      title="Editar"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemove(expense.uuid)}
                      className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
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
