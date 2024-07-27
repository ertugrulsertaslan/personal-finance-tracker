import { useDataStore } from "./Store";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { iconExists } from "@iconify/react";
export default function addExpenses() {
  const { addIncome, addExpense, addCategory, categories, months } =
    useDataStore();

  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState(categories[0]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [customInputValue, setCustomInputValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [icon, setIcon] = useState("");

  const month = months[startDate.getMonth()];
  const year = startDate.getFullYear();
  const day = startDate.getDate();
  const hour = startDate.getHours();
  const minute = startDate.getMinutes();
  const time = `${hour}:${minute}`;

  const handleAddTransaction = () => {
    if (amount > 0) {
      if (type === "income") {
        addIncome({ amount, category, month, year, icon, day, time });
      } else {
        addExpense({ amount, category, month, year, icon, day, time });
      }
    } else {
      console.log("please enter amount");
    }
    setIcon("");
    setAmount("");
  };
  const handleIconChange = (event) => {
    const newIcon = event.target.value;
    const iconn = `material-symbols:${newIcon}`; // or mdi:

    if (iconExists(iconn)) {
      setIcon(newIcon);
    }
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
  const handleCreateOption = (inputValue) => {
    const newCategory = inputValue.trim();
    if (newCategory && !categories.includes(newCategory)) {
      addCategory(newCategory);
      setSelectedOption({ label: newCategory, value: newCategory });
    }
  };
  return (
    <>
      <div className="w-full flex justify-center text-center items-center h-full">
        <div className="w-full md:w-2/3 lg:w-1/2 bg-customLineColor p-5">
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
            <input
              type="text"
              onChange={handleIconChange}
              placeholder="Write icon name"
              className="h-8 w-11/12 m-5 p-2"
            />
          </div>
          <div>
            <CreatableSelect
              className="m-5 w-11/12 text-wrap"
              options={customOptions}
              isClearable
              onChange={handleCategoryChange}
              onInputChange={handleInputChange}
              inputValue={customInputValue}
              onCreateOption={handleCreateOption}
              placeholder="Select or Write"
              noOptionsMessage={() =>
                customInputValue.trim() === "" ? "" : null
              }
            />
          </div>
          <div className="mb-5">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
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
