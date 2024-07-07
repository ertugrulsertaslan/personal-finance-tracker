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
  let expensesItem = expenses && expenses.length > 0 ? expenses[0] : {};
  let incomesItem = incomes && incomes.length > 0 ? incomes[0] : {};

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
    ],
  };
  const lineChartDataIncomes = {
    labels: ["salary", "sideJob", "investment"],
    datasets: [
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
