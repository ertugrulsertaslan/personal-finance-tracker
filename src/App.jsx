import { useState } from "react";
import "./App.css";
import LineGraph from "./components/Line.jsx";
import AddTable from "./components/AddTable.jsx";
import { useDataStore } from "./components/Store.jsx";
function App() {
  const { totalExpenses, totalIncomes } = useDataStore((state) => ({
    expenses: state.expenses,
    totalExpenses: state.totalExpenses(),
    totalIncomes: state.totalIncomes(),
  }));

  return (
    <>
      <div>
        <LineGraph />
      </div>
      <div>Expenses:{totalExpenses}</div>
      <div>Incomes:{totalIncomes}</div>
      <div>
        <AddTable />
      </div>
    </>
  );
}

export default App;
