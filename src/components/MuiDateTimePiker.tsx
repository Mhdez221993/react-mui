import { Stack, TextField } from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";

export const MuiDateTimePicker = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [dateTime, setDateTime] = useState<Date | null>(null);

  console.log({
    date,
    time: time && time.toLocaleTimeString(),
    dateTime,
  });

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />

      <TimePicker
        label="Time Picker"
        value={time}
        onChange={(newValue) => {
          setTime(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />

      <DateTimePicker
        label="Date Time Picker"
        value={dateTime}
        onChange={(newValue) => {
          setDateTime(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  );
};
