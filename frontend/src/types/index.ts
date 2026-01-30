export interface User {
  uuid: string;
  name: string;
  income: number;
  expenses: number;
  balance: number;
}

export interface Expense {
  uuid: string;
  type?: string;
  title: string;
  value: number;
  isRecurring?: boolean;
  installments?: number;
  category: {
    name: string;
  };
  date: string;
  endDate?: string;
}

export enum CategoryType {
  Alimentação = "Alimentação",
  Transporte = "Transporte",
  Entretenimento = "Entretenimento",
  Outros = "Outros",
  Saúde = "Saúde",
  Educação = "Educação",
  Compras = "Compras",
  Viagem = "Viagem",
  Investimentos = "Investimentos",
  Dívidas = "Dívidas",
}

export interface Category {
  id: number;
  name: string;
}

export interface EditExpenseDialogProps {
  expense: {
    uuid: string;
    title: string;
    value: number;
    date: string;
    categoryId?: number;
  };
  onExpenseUpdated: () => void;
  onClose: () => void;
}

export interface DashboardTableProps {
  expenses: Expense[];
  onEdit: (expense: Expense) => void;
  onRemove: (expense: Expense) => void;
}
