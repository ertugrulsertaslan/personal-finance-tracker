import { useDataStore } from "../Store.jsx";
import { useState } from "react";
import IconSelect from "./IconSelect";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DataForm() {
  const { addIncome, addExpense, addCategory, categories, months } =
    useDataStore();

  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [icon, setIcon] = useState("");
  const [amountError, setAmountError] = useState(false);

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
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    if (e.target.validity.valid) {
      setAmountError(false);
    } else {
      setAmountError(true);
    }
  };
  return (
    <>
      <div className="w-full justify-center text-center items-center h-full grid grid-cols-1">
        <div className="col-span-1 flex justify-center">
          <div className="grid gap-5 shadow-2xl p-10 rounded-lg">
            <div>
              <h2 className="font-bold text-2xl mb-10 mt-5">Data</h2>
            </div>
            <div className="w-full flex justify-between">
              <div className="w-5/12">
                <TextField
                  required
                  error={amountError}
                  helperText={amountError ? "Enter amount" : ""}
                  size="small"
                  id="outlined-number"
                  label="Amount"
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
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
                  renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => {
                      const { key, ...rest } = getTagProps({ index });
                      return (
                        <Chip key={key} label={option[option]} {...rest} />
                      );
                    })
                  }
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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  size="small"
                  label="Select Date"
                  value={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} size="small" />
                  )}
                  sx={{ width: "320px" }}
                />
              </LocalizationProvider>
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
