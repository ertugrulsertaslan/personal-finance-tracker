import { create } from "zustand";

export const useDataStore = create((set, get) => ({
  incomes: [],
  expenses: [],
  categories: ["rent", "kitchen", "bill", "salary", "sideJob"],
  salary: "",
  sideJob: "",
  investment: "",
  addCategory: (category) =>
    set((state) => ({ categories: [...state.categories, category] })),

  addExpense: (item) => {
    set((state) => ({
      expenses: [...state.expenses, item],
    }));
  },
  addIncome: (item) => {
    set((state) => ({
      incomes: [...state.incomes, item],
    }));
  },
  totalExpenses: () => {
    return get().expenses.reduce((total, expense) => {
      return expense.amount;
    }, 0);
  },
  totalIncomes: () => {
    return get().incomes.reduce((total, income) => {
      return income.amount;
    }, 0);
  },
}));
