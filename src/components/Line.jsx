import React from "react";
import { useDataStore } from "./Store";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Label,
} from "recharts";

function AreaGraph() {
  const { expenses, incomes } = useDataStore((state) => ({
    expenses: state.expenses,
    incomes: state.incomes,
  }));

  const expensescategories = expenses.map((expense) => expense.category);
  const expensesamounts = expenses.map((expense) => parseFloat(expense.amount));

  const incomescategories = incomes.map((income) => income.category);
  const incomesamounts = incomes.map((income) => parseFloat(income.amount));

  const dataExpenses = expensescategories.length
    ? expensescategories.map((category, index) => ({
        category,
        amount: expensesamounts[index],
      }))
    : [{ category: "No Data", amount: 0 }];

  const dataIncomes = incomescategories.length
    ? incomescategories.map((category, index) => ({
        category,
        amount: incomesamounts[index],
      }))
    : [{ category: "No Data", amount: 0 }];

  const getMaxValue = (data) => Math.max(...data.map((d) => d.amount));

  const maxExpensesValue = getMaxValue(dataExpenses);
  const maxIncomesValue = getMaxValue(dataIncomes);

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

  return (
    <div className="w-full">
      <div className="mb-5">
        <ResponsiveContainer
          width="100%"
          height={300}
          className="bg-customBgColor p-3"
        >
          <AreaChart data={dataExpenses} className="mt-3">
            <CartesianGrid
              stroke="#f5f5f5"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="category"
              height={60}
              tick={<CustomizedAxisTick />}
            />

            <YAxis domain={[0, maxExpensesValue + 30]} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#583ca2"
              fill="#583ca2"
            />
          </AreaChart>
          <Label value="Custom Label" position="top" />
        </ResponsiveContainer>
      </div>
      <div>
        <ResponsiveContainer
          width="100%"
          height={300}
          className="bg-customBgColor p-3"
        >
          <AreaChart data={dataIncomes} className="mt-3">
            <CartesianGrid
              stroke="#f5f5f5"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="category"
              height={60}
              tick={<CustomizedAxisTick />}
            />
            <YAxis domain={[0, maxIncomesValue + 30]} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#26539e"
              fill="#26539e"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AreaGraph;
