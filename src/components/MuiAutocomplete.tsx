import { Autocomplete, Stack, TextField } from "@mui/material";

const MuiAutocomplete = () => {
  let skills = ["HTML", "CSS", "JS", "Rails"];

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
