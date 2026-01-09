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
    categoryTotals[category] =
      (categoryTotals[category] || 0) + Math.abs(expense.value);
  });

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#10B981", // emerald
          "#F59E0B", // amber
          "#3B82F6", // blue
          "#A855F7", // purple
          "#EC4899", // pink
          "#14B8A6", // teal
          "#F97316", // orange
        ],
        borderWidth: 2,
        borderColor: "#1E293B",
        hoverOffset: 15,
      },
    ],
  };

  if (expenses.length === 0) return null;

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all group">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-2xl">📊</span> Gastos por Categoria
        </h2>
        <div className="px-3 py-1 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
          <span className="text-emerald-400 text-sm font-semibold">
            {Object.keys(categoryTotals).length}
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <div style={{ width: 240, height: 240 }}>
          <Pie
            data={data}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "bottom",
                  labels: {
                    color: "#cbd5e1",
                    padding: 15,
                    font: {
                      size: 12,
                      weight: 500,
                    },
                  },
                },
                tooltip: {
                  backgroundColor: "#1e293b",
                  titleColor: "#fff",
                  bodyColor: "#cbd5e1",
                  borderColor: "#475569",
                  borderWidth: 1,
                  padding: 12,
                  displayColors: true,
                  callbacks: {
                    label: (context) => {
                      const label = context.label || "";
                      const value = context.parsed || 0;
                      const total = context.dataset.data.reduce(
                        (a: number, b: number) => a + b,
                        0
                      );
                      const percentage = ((value / total) * 100).toFixed(1);
                      return `${label}: R$ ${value.toFixed(
                        2
                      )} (${percentage}%)`;
                    },
                  },
                },
              },
              animation: {
                animateRotate: true,
                animateScale: true,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
