"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PrinterIcon, SearchIcon } from "lucide-react";
import { DashboardTable } from "@/components/dashboard-table";
import { MonthSelector } from "@/components/month-selector";
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
import { AddTransactionDialog } from "@/components/add-transaction-dialog";
import { AddExpenseDialog } from "@/components/AddExpenseDialog";
import { toast } from "sonner";

interface User {
  uuid: string;
  name: string;
  income: number;
  expenses: number;
  balance: number;
}

interface Expense {
  uuid: string;
  title: string;
  value: number;
  date: string;
  isRecurring?: boolean;
  installments?: number;
  category: {
    name: string;
  };
}

export default function DashboardPage() {
  const currentMonth = new Date().toISOString().slice(0, 7);
  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonth);
  const [selectedYear, setSelectedYear] = useState<string>(
    currentMonth.split("-")[0]
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dashboardData, setDashboardData] = useState<{
    user: User;
    expenses: Expense[];
  } | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = getItem<{ uuid: string; name: string }>("user");
    if (storedUser && storedUser.uuid) {
      console.log("Usuário autenticado:", storedUser);
      setUserId(storedUser.uuid);
    } else {
      console.error(
        "Usuário não autenticado. Objeto 'user' não encontrado no localStorage."
      );
    }
  }, []);

  const fetchDashboard = async () => {
    if (!userId) return;

    try {
      const formattedMonth = `${selectedYear}-${selectedMonth.split("-")[1]}`;
      console.log("Buscando dados do dashboard para:", formattedMonth);

      const data = await userService.getDashboard(userId as string, {
        month: formattedMonth,
        title: searchQuery,
      });
      setDashboardData(data);
    } catch (error) {
      console.error("Erro ao buscar o dashboard:", error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, [userId, selectedMonth, selectedYear]);

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
              } catch (error) {
                console.error("Erro ao deletar a despesa:", error);
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
    return <p className="p-5">Carregando...</p>;
  }

  const { user, expenses } = dashboardData;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/dashboard"
            className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2"
          >
            Controle +
          </Link>
          <Button variant="outline" size="sm" className="gap-2">
            <PrinterIcon className="h-4 w-4" /> Imprimir
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium">Olá, {user.name}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-3xl font-bold ${
                      user.balance < 0 ? "text-red-500" : ""
                    }`}
                  >
                    {formatCurrency(user.balance)}
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
                  <p className="text-sm text-muted-foreground">
                    Receita total:
                  </p>
                  <p className="text-xl font-medium">
                    {formatCurrency(user.income)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Despesas total:
                  </p>
                  <p className="text-xl font-medium">
                    {formatCurrency(user.expenses)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

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

        <div></div>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2 mb-4 items-center">
              <div className="relative max-w-xs w-full">
                <Input
                  placeholder="Filtrar por título"
                  className="pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  onClick={fetchDashboard}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <SearchIcon className="h-5 w-5 text-gray-800 hover:text-gray-600" />
                </button>
              </div>
              <AddExpenseDialog onExpenseAdded={fetchDashboard} />
            </div>
            {expenses.length > 0 ? (
              <DashboardTable
                expenses={expenses}
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
        <div className="fixed bottom-10 right-10">
          <AddTransactionDialog onTransactionAdded={fetchDashboard} />
        </div>
      </div>
    </main>
  );
}
