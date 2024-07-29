import { useDataStore } from "./Store";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IconSelect from "./IconSelect";

export default function AddTable() {
  const { addIncome, addExpense, addCategory, categories, months } =
    useDataStore();

  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [icon, setIcon] = useState("");

  const month = months[startDate.getMonth()];
  const year = startDate.getFullYear();
  const day = startDate.getDate();
  const hour = startDate.getHours();
  const minute = startDate.getMinutes();
  const time = `${hour}:${minute}`;

  const filter = createFilterOptions();

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
    setCategory(null);
  };

  const handleCategoryChange = (event, newValue) => {
    if (typeof newValue === "string") {
      setCategory(newValue);
      addCategory(newValue);
    } else if (newValue && newValue.inputValue) {
      setCategory(newValue.inputValue);
      addCategory(newValue.inputValue);
    } else {
      setCategory(newValue?.title || null);
    }
  };
  const handleValueChange = (newValue) => {
    setIcon(newValue);
  };

  return (
    <>
      <div className="w-full flex justify-center text-center items-center h-full">
        <div className="w-full md:w-2/3 lg:w-1/2 px-10 py-5 relative overflow-hidden bg-white">
          <div className="absolute -top-4 -left-10 -translate-y-1/2 rounded-full w-[520px] h-[400px] blur-3xl mix-blend opacity bg-cobalt-400"></div>
          <div className="absolute -bottom-10 -left-5 rounded-full w-60 h-96 blur-3xl mix-blend opacity bg-cobalt-200"></div>
          <div className="relative grid gap-5">
            <div>
              <h2 className="font-bold text-2xl m-10 text-cobalt-50">Data</h2>
            </div>
            <div className="w-full flex justify-between">
              <div className="w-5/12">
                <TextField
                  size="small"
                  id="outlined-number"
                  label="Amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="w-5/12">
                <Autocomplete
                  value={category}
                  onChange={handleCategoryChange}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    const { inputValue } = params;
                    if (inputValue !== "" && !categories.includes(inputValue)) {
                      filtered.push({
                        inputValue,
                        title: `Add "${inputValue}"`,
                      });
                    }
                    return filtered;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  options={categories.map((option) => ({ title: option }))}
                  getOptionLabel={(option) => {
                    if (typeof option === "string") {
                      return option;
                    }
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    return option.title;
                  }}
                  renderOption={(props, option) => (
                    <li {...props}>{option.title}</li>
                  )}
                  freeSolo
                  renderInput={(params) => (
                    <TextField {...params} label="Category" size="small" />
                  )}
                />
              </div>
            </div>
            <div>
              <FormControl className="w-full">
                <InputLabel id="demo-simple-select-label" size="small">
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  size="small"
                  id="demo-simple-select"
                  value={type}
                  label="Type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value="income">Income</MenuItem>
                  <MenuItem value="expense">Expense</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="w-full">
              <IconSelect onValueChange={handleValueChange} />
            </div>

            <div className="mb-5">
              <DatePicker
                className="w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <button
                className="w-full  text-white button-bezel text-center py-2 px-6 rounded-lg button-shadow bg-gradient-to-r from-cobalt-500 to-cobalt-600"
                onClick={handleAddTransaction}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
