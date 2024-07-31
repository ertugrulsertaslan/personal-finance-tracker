import { create } from "zustand";
import { useState, useEffect } from "react";
export const useDataStore = create((set, get) => ({
  incomes: [],
  expenses: [],
  sendMoneys: [],
  selectType: true,
  setSelectType: (value) => set({ selectType: value }),
  calculateTotalPrice: () => {
    const totalIncome = get().totalIncomes();
    const totalExpense = get().totalExpenses();
    const totalSendMoney = get().totalSendMoney();
    const totalPrice = totalIncome - totalExpense - totalSendMoney;
    return totalPrice >= 0 ? `$${totalPrice}` : `-$${Math.abs(totalPrice)}`;
  },
  useDebounce: (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  },
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  categories: ["Rent", "Kitchen", "Bill", "Salary", "SideJob"],
  addCategory: (category) =>
    set((state) => ({ categories: [...state.categories, category] })),

  addExpense: (item) => {
    set((state) => ({
      expenses: [...state.expenses, item],
    }));
  },
  addSendMoney: (item) => {
    set((state) => ({
      sendMoneys: [...state.sendMoneys, item],
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
      const amount = parseFloat(expense.amount);
      total += amount;
    });

    return total;
  },
  totalSendMoney: () => {
    const sendMoneys = get().sendMoneys;
    let total = 0;

    sendMoneys.forEach((sendMoney) => {
      const amount = parseFloat(sendMoney.amount);
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
