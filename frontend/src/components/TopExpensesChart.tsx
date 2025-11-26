"use client";

import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";
import { Expense } from "@/types";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type Props = {
  expenses: Expense[];
};

export function TopExpensesChart({ expenses }: Props) {
  const topExpenses = [...expenses]
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  if (topExpenses.length === 0) return null;

  const data = {
    labels: topExpenses.map((e) => e.title),
    datasets: [
      {
        label: "Valor (R$)",
        data: topExpenses.map((e) => e.value),
        backgroundColor: "#60a5fa",
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<"bar">) => `R$ ${ctx.parsed.x.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: function (tickValue: string | number) {
            if (typeof tickValue === "number") {
              return `R$ ${tickValue.toFixed(2)}`;
            }
            return tickValue;
          },
        },
      },
    },
  };

  return (
    <div className="mb-6 bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col items-center w-full">
      <h2 className="text-lg font-semibold mb-2 w-full text-left">
        Top 5 maiores despesas
      </h2>
      <div style={{ width: 300, height: 180 }}>
        <Chart
          type="bar"
          className="mt-10"
          data={data}
          options={options}
          width={300}
          height={180}
        />
      </div>
    </div>
  );
}
