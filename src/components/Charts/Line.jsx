import React, { useEffect, useState } from "react";
import { useDataStore } from "../Store.jsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import PdfMaker from "../Common/PdfMaker";

export default function AreaGraph() {
  const {
    expenses,
    incomes,
    sendMoneys,
    totalExpenses,
    totalIncomes,
    calculateTotalPrice,
  } = useDataStore((state) => ({
    expenses: state.expenses,
    incomes: state.incomes,
    sendMoneys: state.sendMoneys,
    totalExpenses: state.totalExpenses(),
    totalIncomes: state.totalIncomes(),
    calculateTotalPrice: state.calculateTotalPrice(),
  }));
  const [selectedYear, setSelectedYear] = useState("");
  const currentDate = new Date().getFullYear();

  const aggregateData = (data) => {
    const aggregatedData = {};

    data.forEach((item) => {
      const key = `${item.month}-${item.year}`;
      if (!aggregatedData[key]) {
        aggregatedData[key] = {
          month: item.month,
          year: item.year,
          expenseAmount: 0,
          incomeAmount: 0,
        };
      }
      aggregatedData[key].expenseAmount += parseFloat(item.expenseAmount) || 0;
      aggregatedData[key].incomeAmount += parseFloat(item.incomeAmount) || 0;
    });

    return Object.values(aggregatedData);
  };

  // Combine expenses and revenues into a single dataset
  const combinedData = [
    ...expenses.map((expense) => ({
      month: expense.month,
      year: expense.year,
      expenseAmount: expense.amount,
      incomeAmount: 0,
    })),
    ...incomes.map((income) => ({
      month: income.month,
      year: income.year,
      expenseAmount: 0,
      incomeAmount: income.amount,
    })),
    ...sendMoneys.map((sendMoney) => ({
      month: sendMoney.month,
      year: sendMoney.year,
      expenseAmount: sendMoney.amount,
      incomeAmount: 0,
    })),
  ];
  //Sum the combined data by month and year
  const aggregatedCombinedData = aggregateData(combinedData);
  const uniqueYears = [
    ...new Set(aggregatedCombinedData.map((item) => item.year)),
  ];
  const sortedYears = uniqueYears.sort((a, b) => a - b);
  const filteredData = aggregatedCombinedData.filter((data) => {
    return selectedYear ? data.year.toString() === selectedYear : true;
  });

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const CustomizedAxisTick = (props) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  const formatYAxis = (tick) => {
    if (tick === 0) return "0";
    if (tick === 25000) return "25k";
    if (tick === 50000) return "50k";
    if (tick === 75000) return "75k";
    if (tick === 100000) return "100k";
    return tick;
  };

  return (
    <div>
      <div className="w-full p-4">
        <div className="flex justify-between">
          <div>
            <h5 className="font-semibold mb-2">Cashflow</h5>
            <p className="text-gray-400 text-xs">Total Balance</p>
            <h5 className="font-bold text-xl">
              {totalExpenses && totalExpenses > totalIncomes
                ? `${calculateTotalPrice}`
                : `${calculateTotalPrice}`}
            </h5>
          </div>
          <PdfMaker />
          <div>
            <select
              id="year"
              className="p-1 rounded border-2 text-xs text-gray-500"
              onChange={handleYearChange}
              value={selectedYear}
            >
              <option value={currentDate}>This Year</option>
              {sortedYears &&
                sortedYears.map((item) => (
                  <option key={item} value={item.year}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240} className="p-1" id="chart">
        <LineChart data={filteredData} className="mt-3 -ml-7">
          <CartesianGrid
            stroke="#f5f5f5"
            strokeWidth={1}
            strokeDasharray="3 3"
          />
          <XAxis dataKey="month" height={60} tick={<CustomizedAxisTick />} />
          <YAxis
            domain={[0, 100000]}
            ticks={[0, 25000, 50000, 75000, 100000]}
            tickFormatter={formatYAxis}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="expenseAmount"
            stroke="#fea722"
            fill="#fea722"
          />
          <Line
            type="monotone"
            dataKey="incomeAmount"
            stroke="#1d85fd"
            fill="#1d85fd"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
