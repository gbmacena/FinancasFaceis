"use client";

import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSummary } from "@/components/DashboardSummary";
import { DashboardFilters } from "@/components/DashboardFilters";
import { DashboardExpenses } from "@/components/DashboardExpenses";
import { DashboardSkeleton } from "@/components/DashboardSkeleton";
import { CategoryExpensesChart } from "@/components/CategoryExpensesChart";
import { TopExpensesChart } from "@/components/TopExpensesChart";
import { useCategories } from "@/hooks/useCategories";
import { useDashboard } from "@/hooks/useDashboard";

export default function DashboardPage() {
  const categories = useCategories();
  const {
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
    deleteConfirmationModal,
  } = useDashboard(categories);

  if (!dashboardData) {
    return <DashboardSkeleton />;
  }

  const hasActiveFilters =
    activeSearchQuery.trim() !== "" || selectedCategory !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <DashboardHeader
        user={dashboardData.user}
        onTransactionAdded={fetchDashboard}
      />

      <div className="max-w-7xl mx-auto px-6 pb-12 relative z-10">
        <DashboardSummary
          user={dashboardData.user}
          expenses={dashboardData.expenses}
        />

        <DashboardFilters
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {!hasActiveFilters && dashboardData.expenses.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <CategoryExpensesChart expenses={dashboardData.expenses} />
            <TopExpensesChart expenses={dashboardData.expenses} />
          </div>
        )}

        <DashboardExpenses
          expenses={dashboardData.expenses}
          onEdit={fetchDashboard}
          onRemove={handleDeleteExpense}
          onPrint={handlePrint}
        />
      </div>
      {deleteConfirmationModal}
    </div>
  );
}
