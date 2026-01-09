"use client";

import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";
import { Expense } from "@/types";

ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

type Props = {
  expenses: Expense[];
};

export function TopExpensesChart({ expenses }: Props) {
  const topExpenses = [...expenses]
    .sort((a, b) => Math.abs(b.value) - Math.abs(a.value))
    .slice(0, 5);

  if (topExpenses.length === 0) return null;

  const data = {
    labels: topExpenses.map((e) => e.title),
    datasets: [
      {
        label: "Valor (R$)",
        data: topExpenses.map((e) => Math.abs(e.value)),
        backgroundColor: [
          "rgba(16, 185, 129, 0.8)",
          "rgba(245, 158, 11, 0.8)",
          "rgba(59, 130, 246, 0.8)",
          "rgba(168, 85, 247, 0.8)",
          "rgba(236, 72, 153, 0.8)",
        ],
        borderColor: [
          "rgb(16, 185, 129)",
          "rgb(245, 158, 11)",
          "rgb(59, 130, 246)",
          "rgb(168, 85, 247)",
          "rgb(236, 72, 153)",
        ],
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 30,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#fff",
        bodyColor: "#cbd5e1",
        borderColor: "#475569",
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: (ctx: TooltipItem<"bar">) =>
            `Valor: R$ ${ctx.parsed.x.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: "rgba(71, 85, 105, 0.3)",
          drawBorder: false,
        },
        ticks: {
          color: "#94a3b8",
          callback: function (tickValue: string | number) {
            if (typeof tickValue === "number") {
              return `R$ ${tickValue.toFixed(0)}`;
            }
            return tickValue;
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#cbd5e1",
          font: {
            size: 12,
            weight: 500,
          },
        },
      },
    },
    animation: {
      duration: 1000,
    },
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all group">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-2xl">🏆</span> Top 5 Maiores Despesas
        </h2>
        <div className="px-3 py-1 bg-amber-500/20 rounded-lg border border-amber-500/30">
          <span className="text-amber-400 text-sm font-semibold">
            {topExpenses.length}
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <div style={{ width: 400, height: 240 }}>
          <Chart
            type="bar"
            data={data}
            options={options}
            width={400}
            height={240}
          />
        </div>
      </div>
    </div>
  );
}
