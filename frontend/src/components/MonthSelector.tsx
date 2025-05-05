"use client";

import { Button } from "@/components/ui/button";

const months = [
  { value: "01", label: "Jan" },
  { value: "02", label: "Fev" },
  { value: "03", label: "Mar" },
  { value: "04", label: "Abr" },
  { value: "05", label: "Mai" },
  { value: "06", label: "Jun" },
  { value: "07", label: "Jul" },
  { value: "08", label: "Ago" },
  { value: "09", label: "Set" },
  { value: "10", label: "Out" },
  { value: "11", label: "Nov" },
  { value: "12", label: "Dez" },
];

interface MonthSelectorProps {
  selectedMonth: string;
  onSelectMonth: (month: string) => void;
}

export function MonthSelector({
  selectedMonth,
  onSelectMonth,
}: MonthSelectorProps) {
  const currentYear = selectedMonth.split("-")[0];

  return (
    <div className="flex flex-wrap gap-1">
      {months.map((month) => {
        const monthValue = `${currentYear}-${month.value}`;
        return (
          <Button
            key={month.value}
            variant={selectedMonth === monthValue ? "default" : "outline"}
            size="sm"
            onClick={() => onSelectMonth(monthValue)}
            className={
              selectedMonth === monthValue
                ? "bg-primary text-primary-foreground"
                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            }
          >
            {month.label}
          </Button>
        );
      })}
    </div>
  );
}
