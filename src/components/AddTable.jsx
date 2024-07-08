import { useDataStore } from "./Store";
import { useState } from "react";

export default function addExpenses() {
  const { addIncome, addExpense, addCategory, categories, expenses } =
    useDataStore();
  console.log(expenses);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState(categories[0]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddTransaction = () => {
    if (type === "income") {
      addIncome({ amount, category });
    } else {
      addExpense({ amount, category });
    }
    setAmount("");
  };
  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      addCategory(newCategory);
      setCategory(newCategory);
      setNewCategory("");
    }
  };

  return (
    <>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Miktar"
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Gelir</option>
        <option value="expense">Gider</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={handleAddTransaction}>Ekle</button>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="Yeni Kategori"
      />
      <button onClick={handleAddCategory}>Kategori Ekle</button>
    </>
  );
}
/*


<div className="w-full flex">
        <div className="w-full flex items-center justify-center">
          <div className="flex w-full flex-wrap items-center justify-center border-2 p-5">
            <h1 className="w-1/2 mt-5 mb-5 text-2xl font-bold">Expenses</h1>
            <div className="w-full">
              <input
                className="mt-2 mb-2 w-2/5 mr-5  p-2 border border-red-500 rounded-lg"
                type="number"
                name="rent"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
                placeholder="rent"
              />
              <input
                className="w-2/5 p-2 ml-5 border border-red-500 rounded-lg"
                type="number"
                name="kitchen"
                value={kitchen}
                onChange={(e) => setKitchen(e.target.value)}
                placeholder="kitchen"
              />

              <input
                className="w-2/5 p-2 mr-5 border border-red-500 rounded-lg"
                type="number"
                name="bill"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="bill"
              />
              <input
                className="mt-2 mb-2 w-2/5 ml-5 p-2 border border-red-500 rounded-lg"
                type="number"
                name="clothes"
                value={clothes}
                onChange={(e) => setClothes(e.target.value)}
                placeholder="clothes"
              />
              <input
                className="mt-2 mb-2 w-2/5 mr-5 p-2 border border-red-500 rounded-lg"
                type="number"
                name="transport"
                value={transport}
                onChange={(e) => setTransport(e.target.value)}
                placeholder="transport"
              />
              <input
                className="mt-2 mb-2 w-2/5 ml-5 p-2 border border-red-500 rounded-lg"
                type="number"
                name="health"
                value={health}
                onChange={(e) => setHealth(e.target.value)}
                placeholder="health"
              />
              <input
                className="w- ml-3 mt-2 mb-2 p-2 border border-red-500 rounded-lg"
                type="number"
                name="entertainment"
                value={entertainment}
                onChange={(e) => setEntertainment(e.target.value)}
                placeholder="entertainment"
              />
            </div>
            <button
              className="m-2 mb-10 bg-red-500 p-3 w-1/2 mt-5 text-white"
              onClick={expensesHandler}
            >
              Expenses Add
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center ml-2">
          <div className="flex w-full flex-wrap items-center justify-center border-2 p-5">
            <h1 className="w-1/2 mt-5 mb-8 text-2xl font-bold">Expenses</h1>
            <div className="w-full">
              <input
                className="mb-4 w-full mr-5 p-2 border border-red-500 rounded-lg"
                type="number"
                name="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="salary"
              />
              <input
                className="mt-1 mb-3 w-full  p-2 border border-red-500 rounded-lg"
                type="number"
                name="sideJob"
                value={sideJob}
                onChange={(e) => setSideJob(e.target.value)}
                placeholder="sideJob"
              />
              <input
                className="w-full float-start mt-2 mb-11 p-2 border border-red-500 rounded-lg"
                type="number"
                name="investment"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
                placeholder="investment"
              />
            </div>
            <button
              className="m-2 mb-8 mt-10 bg-red-500 p-3 w-1/2  text-white"
              onClick={incomesHandler}
            >
              Incomes Add
            </button>
          </div>
        </div>
      </div>
*/
