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
  const { expenses, incomes } = useDataStore((state) => ({
    expenses: state.expenses,
    incomes: state.incomes,
  }));

  const expensescategories = expenses.map((expense) => expense.category);
  const expensesamounts = expenses.map((expense) => parseFloat(expense.amount));

  const incomescategories = incomes.map((income) => income.category);
  const incomesamounts = incomes.map((income) => parseFloat(income.amount));

  const backgroundPlugin = {
    id: "customCanvasBackgroundColor",
    beforeDraw: (chart) => {
      const ctx = chart.canvas.getContext("2d");
      ctx.save();
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = "#0a0f26";
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    },
  };
  const lineChartDataExpenses = {
    labels: expensescategories,
    datasets: [
      {
        label: "Expenses",
        data: expensesamounts,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };
  const lineChartDataIncomes = {
    labels: incomescategories,
    datasets: [
      {
        label: "Incomes",
        data: incomesamounts,
        borderColor: "rgb(244, 164, 96)",
      },
    ],
  };
  const chartOptions = {
    scales: {
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };
  return (
    <>
      <div className="w-full">
        <div className="mb-5">
          <Line
            data={lineChartDataExpenses}
            plugins={[backgroundPlugin]}
            options={chartOptions}
          />
        </div>
        <div>
          <Line
            data={lineChartDataIncomes}
            plugins={[backgroundPlugin]}
            options={chartOptions}
          />
        </div>
      </div>
    </>
  );
}
export default LineGraph;
