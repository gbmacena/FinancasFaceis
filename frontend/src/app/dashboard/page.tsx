"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LogOutIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  WalletIcon,
  PrinterIcon,
} from "lucide-react";
import { DashboardTable } from "@/components/DashboardTable";
import { MonthSelector } from "@/components/MonthSelector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import userService from "@/services/userService";
import { getItem } from "@/utils/storage";
import { formatCurrency } from "@/utils/formatCurrency";
import transactionService from "@/services/transitionService";
import { toast } from "sonner";
import { User, Expense } from "@/types";
import { TransactionDialog } from "@/components/TransactionDialog";
import { useCategories } from "@/hooks/useCategories";
import { useRouter } from "next/navigation";
import { CategoryExpensesChart } from "@/components/CategoryExpensesChart";
import { TopExpensesChart } from "@/components/TopExpensesChart";

export default function DashboardPage() {
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [activeSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [dashboardData, setDashboardData] = useState<{
    user: User;
    expenses: Expense[];
  } | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();
  const categories = useCategories();

  useEffect(() => {
    const currentMonth = new Date().toISOString().slice(0, 7);
    setSelectedMonth(currentMonth);
    setSelectedYear(currentMonth.split("-")[0]);
  }, []);

  const DashboardHeader = () => (
    <header className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 mb-8">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo e Nome */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <WalletIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <Link
                href="/dashboard"
                className="text-xl font-bold text-white hover:text-emerald-400 transition-colors"
              >
                FinançasFáceis
              </Link>
              {dashboardData && (
                <p className="text-xs text-slate-400">
                  Olá, {dashboardData.user.name.split(" ")[0]}!
                </p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <TransactionDialog onTransactionAdded={fetchDashboard} />
            <Button
              variant="ghost"
              size="icon"
              className="text-red-400 hover:text-white hover:bg-red-500/20"
              title="Sair"
              onClick={() => {
                localStorage.clear();
                router.push("/");
              }}
            >
              <LogOutIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );

  const DashboardSummary = () => {
    if (!dashboardData) return null;

    const totalIncome = dashboardData.user.income;
    const totalExpenses = Math.abs(dashboardData.user.expenses);
    const balance = dashboardData.user.balance;
    const incomeCount = dashboardData.expenses.filter(
      (e) => e.value > 0
    ).length;
    const expenseCount = dashboardData.expenses.filter(
      (e) => e.value < 0
    ).length;

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
  };

  const DashboardFilters = () => (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-semibold text-white mb-4">Filtros</h3>
      <div className="flex flex-wrap gap-4">
        {/* Ano */}
        <div className="flex-1 min-w-[120px]">
          <label className="text-xs text-slate-400 mb-2 block">Ano</label>
          <Select onValueChange={setSelectedYear} value={selectedYear}>
            <SelectTrigger className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10">
              <SelectValue placeholder="Ano" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              <SelectItem
                value="2023"
                className="text-white hover:bg-slate-700"
              >
                2023
              </SelectItem>
              <SelectItem
                value="2024"
                className="text-white hover:bg-slate-700"
              >
                2024
              </SelectItem>
              <SelectItem
                value="2025"
                className="text-white hover:bg-slate-700"
              >
                2025
              </SelectItem>
              <SelectItem
                value="2026"
                className="text-white hover:bg-slate-700"
              >
                2026
              </SelectItem>
              <SelectItem
                value="2027"
                className="text-white hover:bg-slate-700"
              >
                2027
              </SelectItem>
              <SelectItem
                value="2028"
                className="text-white hover:bg-slate-700"
              >
                2028
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mês */}
        <div className="flex-1 min-w-[200px]">
          <label className="text-xs text-slate-400 mb-2 block">Mês</label>
          <MonthSelector
            selectedMonth={selectedMonth}
            onSelectMonth={setSelectedMonth}
          />
        </div>

        {/* Categoria */}
        <div className="flex-1 min-w-[200px]">
          <label className="text-xs text-slate-400 mb-2 block">Categoria</label>
          <Select
            onValueChange={(value) => {
              setSelectedCategory(value !== "0" ? Number(value) : null);
            }}
            value={selectedCategory !== null ? String(selectedCategory) : "0"}
          >
            <SelectTrigger className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10">
              <SelectValue>
                {selectedCategory !== null
                  ? categories.find((c) => c.id === selectedCategory)?.name ||
                    "Todas"
                  : "Todas as categorias"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              <SelectItem value="0" className="text-white hover:bg-slate-700">
                Todas as categorias
              </SelectItem>
              {categories.map((category) => (
                <SelectItem
                  key={category.id}
                  value={String(category.id)}
                  className="text-white hover:bg-slate-700"
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  const DashboardExpenses = () => {
    if (!dashboardData) return null;

    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Transações</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-400">
              {dashboardData.expenses.length} registros
            </span>
            {dashboardData.expenses.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                className="text-slate-300 border-slate-600 hover:bg-slate-800 hover:text-white gap-2"
                onClick={handlePrint}
              >
                <PrinterIcon className="w-4 h-4" />
                <span className="max-sm:hidden">Imprimir</span>
              </Button>
            )}
          </div>
        </div>

        {dashboardData.expenses.length > 0 ? (
          <DashboardTable
            expenses={dashboardData.expenses}
            onEdit={fetchDashboard}
            onRemove={handleDeleteExpense}
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
  };

  useEffect(() => {
    const storedUser = getItem<{ uuid: string; name: string }>("user");
    if (storedUser && storedUser.uuid) {
      setUserId(storedUser.uuid);
    } else {
      toast.error("Usuário não encontrado. Faça login novamente.");
      router.push("/login");
    }
  }, [router]);

  const fetchDashboard = useCallback(async () => {
    if (!userId || !selectedMonth || !selectedYear) return;

    try {
      const formattedMonth = `${selectedYear}-${selectedMonth.split("-")[1]}`;
      const selectedCategoryName =
        selectedCategory !== null
          ? categories.find((category) => category.id === selectedCategory)
              ?.name
          : undefined;

      const data = await userService.getDashboard(userId as string, {
        month: formattedMonth,
        title: activeSearchQuery,
        category: selectedCategoryName || undefined,
      });
      setDashboardData(data);
    } catch {
      router.push("/login");
      toast.error("Erro ao carregar o dashboard. Tente novamente.");
    }
  }, [
    userId,
    selectedYear,
    selectedMonth,
    selectedCategory,
    categories,
    activeSearchQuery,
    router,
  ]);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  const handlePrint = () => {
    if (!dashboardData) return;

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const totalExpenses = dashboardData.expenses.reduce(
      (sum, expense) => sum + expense.value,
      0
    );

    const printContent = `
      <html>
        <head>
          <title>Relatório de Despesas</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { text-align: center; color: #10b981; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            th { background-color: #10b981; color: white; }
            .total-row { font-weight: bold; background-color: #f4f4f4; }
            .header { text-align: center; margin-bottom: 20px; }
            .date { color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>💰 FinançasFáceis - Relatório de Despesas</h1>
            <p class="date">Período: ${selectedMonth} | Gerado em: ${new Date().toLocaleDateString(
      "pt-BR"
    )}</p>
            ${
              selectedCategory !== null
                ? `<p>Categoria: ${
                    categories.find((c) => c.id === selectedCategory)?.name ||
                    "Todas"
                  }</p>`
                : ""
            }
          </div>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Categoria</th>
                <th>Valor</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              ${dashboardData.expenses
                .map(
                  (expense) => `
                <tr>
                  <td>${expense.title}</td>
                  <td>${expense.category.name}</td>
                  <td style="color: ${
                    expense.value < 0 ? "#ef4444" : "#10b981"
                  }">${formatCurrency(expense.value)}</td>
                  <td>${new Date(expense.date).toLocaleDateString("pt-BR")}</td>
                </tr>`
                )
                .join("")}
              <tr class="total-row">
                <td colspan="2">Total de Despesas</td>
                <td colspan="2">${formatCurrency(totalExpenses)}</td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  const handleDeleteExpense = async (expenseId: string) => {
    toast(
      <div>
        <p>Tem certeza que deseja deletar esta despesa?</p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={async () => {
              try {
                await transactionService.deleteExpense(expenseId);
                toast.success("Despesa deletada com sucesso!");
                fetchDashboard();
              } catch {
                toast.error("Erro ao deletar a despesa. Tente novamente.");
              } finally {
                toast.dismiss();
              }
            }}
            className="bg-black text-white px-3 py-1 rounded"
          >
            Confirmar
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="bg-white px-3 py-1 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>,
      {
        duration: Infinity,
      }
    );
  };

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <DashboardHeader />
        <div className="max-w-7xl mx-auto px-6 pb-12">
          {/* Skeleton Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-pulse"
              >
                <div className="flex justify-between mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl"></div>
                  <div className="w-20 h-6 bg-white/10 rounded"></div>
                </div>
                <div className="space-y-3">
                  <div className="w-32 h-8 bg-white/10 rounded"></div>
                  <div className="w-full h-1 bg-white/10 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skeleton Filters */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 animate-pulse">
            <div className="w-32 h-6 bg-white/10 rounded mb-4"></div>
            <div className="flex gap-4">
              <div className="w-32 h-10 bg-white/10 rounded"></div>
              <div className="w-48 h-10 bg-white/10 rounded"></div>
              <div className="w-48 h-10 bg-white/10 rounded"></div>
            </div>
          </div>

          {/* Skeleton Table */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-pulse">
            <div className="w-32 h-6 bg-white/10 rounded mb-6"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg"></div>
                  <div className="flex-1 space-y-2">
                    <div className="w-3/4 h-4 bg-white/10 rounded"></div>
                    <div className="w-1/2 h-3 bg-white/10 rounded"></div>
                  </div>
                  <div className="w-24 h-6 bg-white/10 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const hasActiveFilters =
    activeSearchQuery.trim() !== "" || selectedCategory !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background decorativo sutil */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <DashboardHeader />

      <div className="max-w-7xl mx-auto px-6 pb-12 relative z-10">
        <DashboardSummary />
        <DashboardFilters />

        {/* Gráficos */}
        {!hasActiveFilters &&
          dashboardData &&
          dashboardData.expenses.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <CategoryExpensesChart expenses={dashboardData.expenses} />
              <TopExpensesChart expenses={dashboardData.expenses} />
            </div>
          )}

        <DashboardExpenses />
      </div>
    </div>
  );
}
