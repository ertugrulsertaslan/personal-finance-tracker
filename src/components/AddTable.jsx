import { useDataStore } from "./Store";
import { useState } from "react";
import Select from "react-select";
export default function addExpenses() {
  const { addIncome, addExpense, addCategory, categories, expenses } =
    useDataStore();

  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState(categories[0]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [customInputValue, setCustomInputValue] = useState("");

  const handleAddTransaction = () => {
    if (customInputValue.trim() !== "") {
      const newCategory = customInputValue.trim();
      if (!categories.includes(newCategory)) {
        addCategory(newCategory);
        setCategory(newCategory);
        setSelectedOption({ label: newCategory, value: newCategory });
        setCustomInputValue("");
      }
    }
    if (amount > 0) {
      if (type === "income") {
        addIncome({ amount, category });
      } else {
        addExpense({ amount, category });
      }
    } else {
      console.log("please enter amount");
    }

    setAmount("");
  };
  const handleCategoryChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption) {
      setCategory(selectedOption.value);
      setNewCategory("");
    }
  };

  const handleInputChange = (inputValue) => {
    setCustomInputValue(inputValue);
  };

  const customOptions = categories.map((cat) => ({
    label: cat,
    value: cat,
  }));
  const noOptionsMessage = () => {
    return customInputValue.trim() === "" ? "" : null;
  };
  return (
    <>
      <div className="w-full flex justify-center text-center items-center h-full">
        <div className="w-2/3 bg-customBgColor p-5">
          <div>
            <h2 className="font-bold text-2xl m-10 text-white">Data</h2>
          </div>
          <div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="h-8 w-11/12 m-5 p-2"
            />
          </div>
          <div>
            <select
              className="h-8 w-11/12 m-5 p-1"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div>
            <Select
              className="m-5 w-11/12 text-wrap"
              options={customOptions}
              isClearable
              onChange={handleCategoryChange}
              onInputChange={handleInputChange}
              inputValue={customInputValue}
              placeholder="Select or Write"
              noOptionsMessage={noOptionsMessage}
            />
          </div>
          <div>
            <button
              className="h-8 w-48 m-5 bg-green-500 text-white"
              onClick={handleAddTransaction}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
