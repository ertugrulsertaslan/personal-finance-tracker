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
        <div className="w-48 ">
          <LineGraph />
        </div>
        <div className="w-2/3 h-40 m-32">
          <LineChartComponent />
        </div>
      </div>
    </>
  );
}

export default App;
