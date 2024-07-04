import { useState } from "react";
import LineGraph from "./Line.jsx";
import { useDataStore } from "./Store.jsx";
function App() {
  const { totalExpenses, totalIncomes } = useDataStore((state) => ({
    expenses: state.expenses,
    totalExpenses: state.totalExpenses(),
    totalIncomes: state.totalIncomes(),
  }));

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-2/3">
          <LineGraph />
        </div>
      </div>
    </>
  );
}

export default App;
