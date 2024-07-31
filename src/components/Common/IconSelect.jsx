import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import TextField from "@mui/material/TextField";
import { useDataStore } from "../Store.jsx";
import Autocomplete from "@mui/material/Autocomplete";
export default function IconSelect({ onValueChange }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const { useDebounce } = useDataStore();
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      axios
        .get(
          `https://api.iconify.design/search?query=${debouncedQuery}&pretty=1`
        )
        .then((response) => {
          setData(response.data.icons || []);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [debouncedQuery]);
  return (
    <>
      <Autocomplete
        disablePortal
        size="small"
        id="combo-box-demo"
        options={data}
        onChange={(event, newValue) => {
          setQuery(newValue);
          onValueChange(newValue);
        }}
        getOptionLabel={(option) => option}
        renderOption={(props, data) => {
          const { key, ...restProps } = props;
          return (
            <li key={key} {...restProps}>
              <Icon icon={data} className="text-3xl mr-4" />

              {data}
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField
            size="small"
            {...params}
            label="Search"
            onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
          />
        )}
      />
    </>
  );
}
