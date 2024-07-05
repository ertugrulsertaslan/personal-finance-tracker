import { useState } from "react";
import LineGraph from "./Line.jsx";
import { useDataStore } from "./Store.jsx";
import LineChartComponent from "./LineChart.jsx";
function App() {
  const { totalExpenses, totalIncomes } = useDataStore((state) => ({
    expenses: state.expenses,
    totalExpenses: state.totalExpenses(),
    totalIncomes: state.totalIncomes(),
  }));

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-48">
          <LineGraph />
        </div>
        <div className="w-1/2 h-60 m-16">
          <LineChartComponent />
        </div>
      </div>
    </>
  );
}

export default App;
