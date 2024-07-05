import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useDataStore } from "./Store";
const LineChartComponent = () => {
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

  const expensesData = [
    {
      name: "rent",
      expenses: expensesItem.rent || 0,
    },
    {
      name: "kitchen",
      expenses: expensesItem.kitchen || 0,
    },
    {
      name: "bill",
      expenses: expensesItem.bill || 0,
    },
    {
      name: "clothes",
      expenses: expensesItem.clothes || 0,
    },
    {
      name: "transport",
      expenses: expensesItem.transport || 0,
    },
    {
      name: "health",
      expenses: expensesItem.health || 0,
    },
    {
      name: "entertainment",
      expenses: expensesItem.entertainment || 0,
    },
  ];

  const incomesData = [
    {
      name: "salary",
      incomes: incomesItem.salary || 0,
    },
    {
      name: "sideJob",
      incomes: incomesItem.sideJob || 0,
    },
    {
      name: "investment",
      incomes: incomesItem.investment || 0,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={expensesData} margin={{ right: 30 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="expenses" stroke="#3b82f6" />
      </LineChart>
      <LineChart data={incomesData} margin={{ right: 30 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="incomes" stroke="#8b5cf6" />
      </LineChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-white text-lg">{label}</p>
        <p className="text-sm text-white">Product 1:</p>
        <span className="ml-2 text-white">${payload[0].value}</span>
      </div>
    );
  }
};
export default LineChartComponent;
