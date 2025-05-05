export interface typeError extends Error {
  statusCode?: number;
}

export interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  user: {
    uuid: string;
    name: string;
  };
  accessToken: string;
}

export interface RegisterResponse {
  message: string;
}

export interface UpdateUserData {
  name?: string;
  email?: string;
}

export interface DashboardFilters {
  month?: string;
  category?: string;
  title?: string;
}

export interface ExpenseListItem {
  uuid: string;
  title: string;
  value: number;
  category: {
    name: string;
  };
  date: Date;
}

export interface DashboardResponse {
  user: {
    name: string;
    balance: number;
    income: number;
    expenses: number;
  };
  expenses: ExpenseListItem[];
}

export interface CreateExpenseData {
  title: string;
  value: number;
  date: string;
  categoryId?: number;
  installments?: number;
  isRecurring?: boolean;
  endDate?: string;
}

export interface CreateExpenseResponse {
  message?: string;
  balance?: number;
}

export interface EntryData {
  value: number;
  date: string;
}

export interface UpdateExpenseData {
  title?: string;
  value?: number;
  date?: string;
  categoryId?: number;
}
