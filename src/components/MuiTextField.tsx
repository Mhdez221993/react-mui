import { InputAdornment, Stack, TextField } from "@mui/material";

import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Samll Secondary"
          variant="outlined"
          size="small"
          color="secondary"
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          required
          helperText={
            !value ? "Require" : "Don't share your password with anyone"
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
        />
        <TextField label="Password" type="password" disabled />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
