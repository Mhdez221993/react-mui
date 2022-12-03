import { Box, FormControlLabel, Switch } from "@mui/material";

import { useState } from "react";

const MuiSwitch = () => {
  const [value, setValue] = useState(false);
  console.log({ value });

  const handSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={value}
            onChange={handSwitch}
            size="small"
            color="success"
          />
        }
      />
    </Box>
  );
};

export default MuiSwitch;
