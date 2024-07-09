import { create } from "zustand";

export const useDataStore = create((set, get) => ({
  incomes: [],
  expenses: [],

  categories: ["Rent", "Kitchen", "Bill", "Salary", "SideJob"],
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
    const expenses = get().expenses;
    let total = 0;

    expenses.forEach((expense) => {
      // Convert amount from string to number
      const amount = parseFloat(expense.amount);
      // Add converted value to total value
      total += amount;
    });

    return total;
  },
  totalIncomes: () => {
    const incomes = get().incomes;
    let total = 0;

    incomes.forEach((income) => {
      const amount = parseFloat(income.amount);
      total += amount;
    });

    return total;
  },
}));
