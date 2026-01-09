import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import userService from "@/services/userService";
import transactionService from "@/services/transitionService";
import { getItem } from "@/utils/storage";
import { User, Expense, Category } from "@/types";

export function useDashboard(categories: Category[]) {
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

  useEffect(() => {
    const currentMonth = new Date().toISOString().slice(0, 7);
    setSelectedMonth(currentMonth);
    setSelectedYear(currentMonth.split("-")[0]);
  }, []);

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

    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value);
    };

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

  return {
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    selectedCategory,
    setSelectedCategory,
    dashboardData,
    fetchDashboard,
    handleDeleteExpense,
    handlePrint,
    activeSearchQuery,
  };
}
