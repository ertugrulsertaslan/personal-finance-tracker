import { useState } from "react";
import { useDataStore } from "./Store";

export default function addExpenses() {
  const {
    addExpenses,
    addIncomes,
    rent,
    setRent,
    kitchen,
    setKitchen,
    bill,
    setBill,
    clothes,
    setClothes,
    transport,
    setTransport,
    health,
    setHealth,
    entertainment,
    setEntertainment,
    salary,
    setSalary,
    sideJob,
    setSideJob,
    investment,
    setInvestment,
  } = useDataStore();
  const expensesHandler = (e) => {
    e.preventDefault();
    addExpenses({
      rent,
      kitchen,
      bill,
      clothes,
      transport,
      health,
      entertainment,
    });
  };
  const incomesHandler = (e) => {
    e.preventDefault();
    addIncomes({
      salary,
      sideJob,
      investment,
    });
  };
  return (
    <form>
      <h1>Expenses</h1>
      <input
        type="number"
        name="rent"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
        placeholder="rent"
      />
      <input
        type="number"
        name="kitchen"
        value={kitchen}
        onChange={(e) => setKitchen(e.target.value)}
        placeholder="kitchen"
      />
      <input
        type="number"
        name="bill"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        placeholder="bill"
      />
      <input
        type="number"
        name="clothes"
        value={clothes}
        onChange={(e) => setClothes(e.target.value)}
        placeholder="clothes"
      />
      <input
        type="number"
        name="transport"
        value={transport}
        onChange={(e) => setTransport(e.target.value)}
        placeholder="transport"
      />
      <input
        type="number"
        name="health"
        value={health}
        onChange={(e) => setHealth(e.target.value)}
        placeholder="health"
      />
      <input
        type="number"
        name="entertainment"
        value={entertainment}
        onChange={(e) => setEntertainment(e.target.value)}
        placeholder="entertainment"
      />
      <button onClick={expensesHandler}>Expenses Add</button>

      <h1>Income</h1>
      <input
        type="number"
        name="salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="salary"
      />
      <input
        type="number"
        name="sideJob"
        value={sideJob}
        onChange={(e) => setSideJob(e.target.value)}
        placeholder="sideJob"
      />
      <input
        type="number"
        name="investment"
        value={investment}
        onChange={(e) => setInvestment(e.target.value)}
        placeholder="investment"
      />
      <button onClick={incomesHandler}>Income Add</button>
    </form>
  );
}
