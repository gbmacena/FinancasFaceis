"use client";

import {
  TrendingUpIcon,
  TrendingDownIcon,
  WalletIcon,
} from "lucide-react";
import { formatCurrency } from "@/utils/formatCurrency";
import { User, Expense } from "@/types";

interface DashboardSummaryProps {
  user: User;
  expenses: Expense[];
}

export function DashboardSummary({ user, expenses }: DashboardSummaryProps) {
  const totalIncome = user.income;
  const totalExpenses = Math.abs(user.expenses);
  const balance = user.balance;
  const incomeCount = expenses.filter((e) => e.value > 0).length;
  const expenseCount = expenses.filter((e) => e.value < 0).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Card Saldo */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-emerald-600/10 to-emerald-700/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 group hover:shadow-2xl hover:shadow-emerald-500/20 transition-all">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-emerald-500/20 rounded-xl">
              <WalletIcon className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-right">
              <p className="text-xs text-emerald-400 font-medium">
                Saldo Atual
              </p>
              <p className="text-xs text-slate-500 mt-1">Disponível</p>
            </div>
          </div>
          <p className="text-3xl font-bold text-white mb-2">
            {formatCurrency(balance)}
          </p>
          <div className="flex items-center gap-2 text-sm">
            <div
              className={`flex items-center gap-1 ${
                balance >= 0 ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {balance >= 0 ? (
                <TrendingUpIcon className="w-4 h-4" />
              ) : (
                <TrendingDownIcon className="w-4 h-4" />
              )}
              <span className="font-medium">
                {balance >= 0 ? "Positivo" : "Negativo"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Receitas */}
      <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <TrendingUpIcon className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-right">
              <p className="text-xs text-blue-400 font-medium">Receitas</p>
              <p className="text-xs text-slate-500 mt-1">
                {incomeCount} transações
              </p>
            </div>
          </div>
          <p className="text-3xl font-bold text-white mb-2">
            {formatCurrency(totalIncome)}
          </p>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Card Despesas */}
      <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group hover:shadow-2xl hover:shadow-red-500/10 transition-all">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-red-500/20 rounded-xl">
              <TrendingDownIcon className="w-6 h-6 text-red-400" />
            </div>
            <div className="text-right">
              <p className="text-xs text-red-400 font-medium">Despesas</p>
              <p className="text-xs text-slate-500 mt-1">
                {expenseCount} transações
              </p>
            </div>
          </div>
          <p className="text-3xl font-bold text-white mb-2">
            {formatCurrency(totalExpenses)}
          </p>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 rounded-full transition-all"
              style={{
                width: `${
                  totalIncome > 0
                    ? Math.min((totalExpenses / totalIncome) * 100, 100)
                    : 0
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
