"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PrinterIcon, SearchIcon } from "lucide-react";
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

export default function DashboardPage() {
  const currentMonth = new Date().toISOString().slice(0, 7);
  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonth);
  const [selectedYear, setSelectedYear] = useState<string>(
    currentMonth.split("-")[0]
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [dashboardData, setDashboardData] = useState<{
    user: User;
    expenses: Expense[];
  } | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();
  const categories = useCategories();

  const DashboardHeader = () => (
    <div className="flex justify-between items-center mb-6">
      <Link
        href="/dashboard"
        className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2"
      >
        FinançasFáceis
      </Link>
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={handlePrint}
      >
        <PrinterIcon className="h-4 w-4" /> Imprimir
      </Button>
    </div>
  );

  const DashboardSummary = () => {
    if (!dashboardData) return null;

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="col-span-1">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium">
                  Olá, {dashboardData.user.name}
                </p>
              </div>
              <div className="text-right">
                <p
                  className={`text-3xl font-bold ${
                    dashboardData.user.balance < 0 ? "text-red-500" : ""
                  }`}
                >
                  {formatCurrency(dashboardData.user.balance)}
                </p>
                <p className="text-sm text-center text-muted-foreground">
                  Saldo atual
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Receita total:</p>
                <p className="text-xl font-medium">
                  {formatCurrency(dashboardData.user.income)}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Despesas total:</p>
                <p className="text-xl font-medium">
                  {formatCurrency(dashboardData.user.expenses)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const DashboardFilters = () => (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2 items-center">
        <Select onValueChange={setSelectedYear} defaultValue={selectedYear}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Selecione o ano" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2026">2026</SelectItem>
          </SelectContent>
        </Select>
        <MonthSelector
          selectedMonth={selectedMonth}
          onSelectMonth={setSelectedMonth}
        />
      </div>
    </div>
  );

  const DashboardExpenses = () => {
    if (!dashboardData) return null;

    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2 mb-4 items-center">
            <div className="relative max-w-xs w-full">
              <Input
                placeholder="Filtrar por título"
                className="pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") fetchDashboard();
                }}
              />
              <button
                onClick={fetchDashboard}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <SearchIcon className="h-5 w-5 text-gray-800 hover:text-gray-600" />
              </button>
            </div>
            <Select
              onValueChange={(value) =>
                setSelectedCategory(value ? Number(value) : null)
              }
              defaultValue="0"
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filtrar por categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Todas as categorias</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={String(category.id)}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {dashboardData.expenses.length > 0 ? (
            <DashboardTable
              expenses={dashboardData.expenses}
              onEdit={fetchDashboard}
              onRemove={handleDeleteExpense}
            />
          ) : (
            <p className="text-center text-gray-500">
              Nenhuma despesa encontrada.
            </p>
          )}
        </CardContent>
      </Card>
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

  const fetchDashboard = async () => {
    if (!userId) return;

    try {
      const formattedMonth = `${selectedYear}-${selectedMonth.split("-")[1]}`;
      const selectedCategoryName =
        selectedCategory !== null
          ? categories.find((category) => category.id === selectedCategory)
              ?.name
          : undefined;

      const data = await userService.getDashboard(userId as string, {
        month: formattedMonth,
        title: searchQuery,
        category: selectedCategoryName || undefined,
      });
      setDashboardData(data);
    } catch {
      router.push("/login");
      toast.error("Erro ao carregar o dashboard. Tente novamente.");
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, [userId, selectedMonth, selectedYear, selectedCategory]);

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
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f4f4f4; }
            h1 { text-align: center; }
            .total-row { font-weight: bold; background-color: #f4f4f4; }
          </style>
        </head>
        <body>
          <h1>Relatório de Despesas - ${selectedMonth}</h1>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
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
                  <td>${formatCurrency(expense.value)}</td>
                  <td>${new Date(expense.date).toLocaleDateString()}</td>
                </tr>`
                )
                .join("")}
              <tr class="total-row">
                <td colspan="2">Total</td>
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

  if (!dashboardData) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />
        <DashboardSummary />
        <DashboardFilters />
        <DashboardExpenses />

        <div className="fixed bottom-10 right-10 max-sm:bottom-6 max-sm:6">
          <TransactionDialog onTransactionAdded={fetchDashboard} />
        </div>
      </div>
    </main>
  );
}
