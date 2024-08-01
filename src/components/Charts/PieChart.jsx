import React, { useState, useRef, useEffect } from "react";
import { useDataStore } from "../Store.jsx";
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(Tooltip, Legend, ArcElement, Title);
export default function PieChart() {
  const { expenses, incomes, months, sendMoneys, selectType, setSelectType } =
    useDataStore((state) => ({
      expenses: state.expenses,
      incomes: state.incomes,
      sendMoneys: state.sendMoneys,
      months: state.months,
      selectType: state.selectType,
      setSelectType: state.setSelectType,
    }));

  const [selectedMonth, setSelectedMonth] = useState("");

  const [date, setDate] = useState(new Date().getMonth());
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  const currentDate = months[date];
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const filteredExpenses = selectedMonth
    ? expenses.filter((expense) => expense.month === selectedMonth)
    : expenses;

  const additionalExpenses = selectedMonth
    ? sendMoneys.filter((sendMoney) => sendMoney.month === selectedMonth)
    : sendMoneys;

  const allFilteredExpenses = [...filteredExpenses, ...additionalExpenses];

  const expensesCategories = [
    ...allFilteredExpenses.map((expense) => expense.category),
  ];

  const expensesAmounts = [
    ...allFilteredExpenses.map((expense) => parseFloat(expense.amount)),
  ];

  let totalExpenses = 0;
  expensesAmounts.forEach(function (element) {
    totalExpenses += Number(element);
  });

  const filteredIncomes = selectedMonth
    ? incomes.filter((income) => income.month === selectedMonth)
    : incomes;

  const IncomesCategories = filteredIncomes.map((income) => income.category);
  const IncomesAmounts = filteredIncomes.map((expense) =>
    parseFloat(expense.amount)
  );
  let totalIncomes = 0;
  IncomesAmounts.forEach(function (element) {
    totalIncomes += Number(element);
  });

  const pieChartDataExpenses = {
    labels: selectType ? expensesCategories : IncomesCategories,
    datasets: [
      {
        label: selectType ? "Expense" : "Income",
        data: selectType ? expensesAmounts : IncomesAmounts,
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
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const { label, raw } = tooltipItem;
            const percentage = (
              (raw / tooltipItem.dataset.data.reduce((a, b) => a + b, 0)) *
              100
            ).toFixed(2);
            return `${label}: ${percentage}% (${raw})`;
          },
        },
      },
      datalabels: {
        formatter: (value, context) => {
          const total =
            context.dataset._meta[Object.keys(context.dataset._meta)[0]].total;
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
        color: "#fff",
      },
    },
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-between">
        <div>
          <h5 className="font-semibold">Statistics</h5>
        </div>
        <div>
          <select
            id="month"
            className="p-1 rounded border-2 text-xs text-gray-500"
            onChange={handleMonthChange}
            value={selectedMonth}
          >
            <option value={currentDate}>This Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full flex justify-between mt-4">
        <button
          onClick={() => setSelectType(false)}
          className="w-1/2 focus:border-b-2 border-customLineColor text-gray-400 p-1 focus:font-bold focus:text-black"
        >
          Income ${totalIncomes}
        </button>
        <button
          ref={buttonRef}
          onClick={() => setSelectType(true)}
          className="w-1/2 focus:border-b-2 border-customLineColor text-gray-400 p-1 focus:font-bold focus:text-black"
        >
          Expense ${totalExpenses}
        </button>
      </div>
      <div
        className="flex justify-center w-full max-h-48 mt-10"
        id={selectType ? "expenses" : "incomes"}
        style={{ height: "300px" }}
      >
        <Pie
          width="100%"
          height="100%"
          data={pieChartDataExpenses}
          options={options}
        />
      </div>
    </div>
  );
}
