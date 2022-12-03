import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value as string);
  };

  return (
    <Box width="250px">
      <TextField
        value={country}
        onChange={handleChange}
        label="Select Country"
        select
        fullWidth
      >
        <MenuItem value="COL">Colombia</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="CAD">Canada</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
