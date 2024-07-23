import { create } from "zustand";

export const useDataStore = create((set, get) => ({
  incomes: [],
  expenses: [],
  totalPrice: 0,
  calculateTotalPrice: () => {
    const totalIncome = get().totalIncomes();
    const totalExpense = get().totalExpenses();
    const totalPrice = totalIncome - totalExpense;
    if (totalPrice >= 0) {
      return `$${totalPrice}`;
    } else {
      return `-$${Math.abs(totalPrice)}`;
    }
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
  categoryIcons: {
    Rent: "fluent-emoji-flat:house-with-garden",
    Kitchen: "noto:pot-of-food",
    Bill: "icon-park:bill",
    Salary: "emojione:money-bag",
    SideJob: "flat-color-icons:money-transfer",
  },
  categories: ["Rent", "Kitchen", "Bill", "Salary", "SideJob"],

  groupExpensesByMonth: () => {
    const grouped = get().expenses.reduce((acc, expense) => {
      const { month, amount } = expense;
      if (!acc[month]) {
        acc[month] = 0;
      }
      acc[month] += parseFloat(amount);
      return acc;
    }, {});

    get().months.forEach((month) => {
      if (!grouped[month]) {
        grouped[month] = 0;
      }
    });
    return get().months.map((month) => ({
      month,
      amount: grouped[month],
    }));
  },
  groupIncomesByMonth: () => {
    const grouped = get().incomes.reduce((acc, income) => {
      const { month, amount } = income;
      if (!acc[month]) {
        acc[month] = 0;
      }

      acc[month] += parseFloat(amount);

      return acc;
    }, {});

    get().months.forEach((month) => {
      if (!grouped[month]) {
        grouped[month] = 0;
      }
    });
    return get().months.map((month) => ({
      month,
      amount: grouped[month],
    }));
  },
  maxExpenseAmount: () => {
    let maxAmount =
      get().expenses.length > 0
        ? Math.max(...get().expenses.map((expense) => expense.amount))
        : 0;

    return maxAmount;
  },
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
      const amount = parseFloat(expense.amount);
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
