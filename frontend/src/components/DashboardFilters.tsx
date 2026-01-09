"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MonthSelector } from "@/components/MonthSelector";
import { Category } from "@/types";

interface DashboardFiltersProps {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  selectedCategory: number | null;
  setSelectedCategory: (category: number | null) => void;
  categories: Category[];
}

const AVAILABLE_YEARS = ["2023", "2024", "2025", "2026", "2027", "2028"];

export function DashboardFilters({
  selectedYear,
  setSelectedYear,
  selectedMonth,
  setSelectedMonth,
  selectedCategory,
  setSelectedCategory,
  categories,
}: DashboardFiltersProps) {
  return (
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
              {AVAILABLE_YEARS.map((year) => (
                <SelectItem
                  key={year}
                  value={year}
                  className="text-white hover:bg-slate-700"
                >
                  {year}
                </SelectItem>
              ))}
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
}
