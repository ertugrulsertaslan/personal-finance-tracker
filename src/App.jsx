import { useState } from "react";
import "./App.css";
import LineGraph from "./components/Line.jsx";
import AddTable from "./components/AddTable.jsx";
import { useDataStore } from "./components/Store.jsx";
import Menu from "./components/Menu.jsx";
import { Link } from "react-router-dom";
function App() {
  const { totalExpenses, totalIncomes } = useDataStore((state) => ({
    expenses: state.expenses,
    totalExpenses: state.totalExpenses(),
    totalIncomes: state.totalIncomes(),
  }));

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-6/7 p-5">
          <AddTable />
        </div>
      </div>
      <div>
        <Link to={`/components/Dashboard`}>
          <button>Products</button>
        </Link>
      </div>
    </>
  );
}

export default App;
