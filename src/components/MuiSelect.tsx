import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        value={countries}
        onChange={handleChange}
        label="Select Country"
        select
        fullWidth
        SelectProps={{ multiple: true }}
        color="secondary"
        size="small"
        helperText="Please select your country"
        error
      >
        <MenuItem value="COL">Colombia</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="CAD">Canada</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
