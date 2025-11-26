"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Expense } from "@/types";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  expenses: Expense[];
};

export function CategoryExpensesChart({ expenses }: Props) {
  const categoryTotals: Record<string, number> = {};
  expenses.forEach((expense) => {
    const category = expense.category?.name || "Sem categoria";
    categoryTotals[category] = (categoryTotals[category] || 0) + expense.value;
  });

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#60a5fa",
          "#f87171",
          "#34d399",
          "#fbbf24",
          "#a78bfa",
          "#f472b6",
          "#facc15",
        ],
      },
    ],
  };

  if (expenses.length === 0) return null;

  return (
    <div className="mb-6 bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col items-center w-full">
      <h2 className="text-lg font-semibold mb-2 w-full text-left">
        Gastos por categoria
      </h2>
      <div style={{ width: 180, height: 300 }}>
        <Pie
          data={data}
          width={180}
          height={180}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}
