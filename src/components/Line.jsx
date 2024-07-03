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
  const { expenses, totalExpenses, totalIncomes } = useDataStore((state) => ({
    expenses: state.expenses,
    totalExpenses: state.totalExpenses(),
    totalIncomes: state.totalIncomes(),
  }));
  const lineChartData = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz"],
    datasets: [
      {
        label: "Expenses",
        data: [expenses], // expenses verisini burada kullanın
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "Income",
        data: [totalIncomes], // totalIncomes verisini burada kullanın
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "Total Expenses",
        data: [totalExpenses], // totalExpenses verisini burada kullanın
        borderColor: "rgb(192, 75, 192)",
      },
    ],
  };

  return <Line data={lineChartData} />;
}
export default LineGraph;
