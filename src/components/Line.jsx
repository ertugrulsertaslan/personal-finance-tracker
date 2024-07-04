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
import { shallow } from "zustand/shallow";
//import { lineChartData } from "./Data";
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
  let firstItem = expenses && expenses.length > 0 ? expenses[0] : {};
  let secondItem = incomes && incomes.length > 0 ? incomes[0] : {};

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
          firstItem.rent || 0,
          firstItem.kitchen || 0,
          firstItem.bill || 0,
          firstItem.clothes || 0,
          firstItem.transport || 0,
          firstItem.health || 0,
          firstItem.entertainment || 0,
        ], // expenses verisini burada kullanın
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "incomes",
        data: [
          secondItem.salary || 0,
          secondItem.sideJob || 0,
          secondItem.investment || 0,
        ], // expenses verisini burada kullanın
        borderColor: "rgb(244, 164, 96)",
      },
    ],
  };

  return <Line data={lineChartData} />;
}
export default LineGraph;
