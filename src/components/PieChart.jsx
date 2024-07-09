import React from "react";
import { useDataStore } from "./Store";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(Tooltip, Legend, ArcElement);
function PieChart() {
  const { expenses, categories } = useDataStore((state) => ({
    expenses: state.expenses,
    incomes: state.incomes,
    totalExpenses: state.totalExpenses(),
    totalIncomes: state.totalIncomes(),
  }));

  const expensescategories = expenses.map((expense) => expense.category);
  const expensesamounts = expenses.map((expense) => parseFloat(expense.amount));
  const pieChartDataExpenses = {
    labels: expensescategories,
    datasets: [
      {
        label: "Expenses",
        data: expensesamounts,
        backgroundColor: [
          "rgba(75, 192, 192, 0.9)",
          "rgba(255, 99, 132, 0.9)",
          "rgba(54, 162, 235, 0.9)",
          "rgba(255, 206, 86, 0.9)",
          "rgba(75, 192, 192, 0.9)",
          "rgba(152, 102, 255, 0.9)",
          "rgba(75, 192, 192, 0.9)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <div className="w-40">
        <Pie data={pieChartDataExpenses} options={options} />
      </div>
    </>
  );
}
export default PieChart;
