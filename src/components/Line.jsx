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
  const {
    expenses,
    incomes,
    groupExpensesByMonth,
    groupIncomesByMonth,
    maxExpenseAmount,
  } = useDataStore((state) => ({
    expenses: state.expenses,
    incomes: state.incomes,
    groupExpensesByMonth: state.groupExpensesByMonth,
    groupIncomesByMonth: state.groupIncomesByMonth,
    maxExpenseAmount: state.maxExpenseAmount,
  }));

  const groupedExpenses = groupExpensesByMonth(expenses);
  const groupedIncomes = groupIncomesByMonth(incomes);

  const maxExpensesValue = maxExpenseAmount();

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
          height={200}
          className="bg-customBgColor p-3"
        >
          <AreaChart data={groupedExpenses} className="mt-3">
            <CartesianGrid
              stroke="#f5f5f5"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
            <XAxis dataKey="month" height={60} tick={<CustomizedAxisTick />} />

            <YAxis domain={[0, maxExpensesValue + 100]} />
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
      <div className="mb-5">
        <ResponsiveContainer
          width="100%"
          height={200}
          className="bg-customBgColor p-3"
        >
          <AreaChart data={groupedIncomes} className="mt-2">
            <CartesianGrid
              stroke="#f5f5f5"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
            <XAxis dataKey="month" height={60} tick={<CustomizedAxisTick />} />
            <YAxis domain={[0, maxExpensesValue + 100]} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#26539e"
              fill="#26539e"
            />
          </AreaChart>
          <Label value="Custom Label" position="top" />
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AreaGraph;
