import { create } from "zustand";

export const useDataStore = create((set, get) => ({
  incomes: [],
  expenses: [],
  rent: "",
  kitchen: "",
  bill: "",
  clothes: "",
  transport: "",
  health: "",
  entertainment: "",
  salary: "",
  sideJob: "",
  investment: "",

  setRent: (rent) =>
    set((state) => ({
      ...state,
      rent,
    })),
  setKitchen: (kitchen) =>
    set((state) => ({
      ...state,
      kitchen,
    })),
  setBill: (bill) =>
    set((state) => ({
      ...state,
      bill,
    })),
  setClothes: (clothes) =>
    set((state) => ({
      ...state,
      clothes,
    })),
  setTransport: (transport) =>
    set((state) => ({
      ...state,
      transport,
    })),
  setHealth: (health) =>
    set((state) => ({
      ...state,
      health,
    })),
  setEntertainment: (entertainment) =>
    set((state) => ({
      ...state,
      entertainment,
    })),
  setSalary: (salary) =>
    set((state) => ({
      ...state,
      salary,
    })),
  setSideJob: (sideJob) =>
    set((state) => ({
      ...state,
      sideJob,
    })),
  setInvestment: (investment) =>
    set((state) => ({
      ...state,
      investment,
    })),

  resetToDoForm: () =>
    set((state) => ({
      ...state,
      rent: "",
      kitchen: "",
      bill: "",
      clothes: "",
      transport: "",
      health: "",
      entertainment: "",
      salary: "",
      sideJob: "",
      investment: "",
    })),
  addExpenses: (item) => {
    set((state) => ({
      expenses: [...state.expenses, item],
    }));
    get().resetToDoForm();
  },
  addIncomes: (item) => {
    set((state) => ({
      incomes: [...state.incomes, item],
    }));
    get().resetToDoForm();
  },
  totalExpenses: () => {
    // console.log("Calculating total expense...");
    return get().expenses.reduce((total, expense) => {
      return (
        total +
        Number(expense.rent) +
        Number(expense.kitchen) +
        Number(expense.bill) +
        Number(expense.clothes) +
        Number(expense.transport) +
        Number(expense.health) +
        Number(expense.entertainment)
      );
    }, 0);
  },
  totalIncomes: () => {
    // console.log("Calculating total income...");
    return get().incomes.reduce((total, income) => {
      return (
        total +
        Number(income.salary) +
        Number(income.sideJob) +
        Number(income.investment)
      );
    }, 0);
  },
}));
