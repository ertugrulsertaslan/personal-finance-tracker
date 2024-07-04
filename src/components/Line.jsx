import React from "react";
import { useDataStore } from "./Store";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function LineGraph() {
  const { expenses, incomes, totalExpenses, totalIncomes } = useDataStore(
    (state) => ({
      expenses: state.expenses,
      incomes: state.incomes,
      totalExpenses: state.totalExpenses(),
      totalIncomes: state.totalIncomes(),
    })
  );
  let expensesItem = expenses && expenses.length > 0 ? expenses[0] : {};
  let incomesItem = incomes && incomes.length > 0 ? incomes[0] : {};

  const lineChartData = {
    labels: [
      "rent",
      "kitchen",
      "bill",
      "clothes",
      "transport",
      "health",
      "entertainment",
    ],
    datasets: [
      {
        label: "Expenses",
        data: [
          expensesItem.rent || 0,
          expensesItem.kitchen || 0,
          expensesItem.bill || 0,
          expensesItem.clothes || 0,
          expensesItem.transport || 0,
          expensesItem.health || 0,
          expensesItem.entertainment || 0,
        ],
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "Incomes",
        data: [
          incomesItem.salary || 0,
          incomesItem.sideJob || 0,
          incomesItem.investment || 0,
        ],
        borderColor: "rgb(244, 164, 96)",
      },
    ],
  };

  return <Line data={lineChartData} />;
}
export default LineGraph;
