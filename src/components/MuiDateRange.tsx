import { DateRange, DateRangePicker } from "@mui/x-date-pickers-pro";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export const MuiDateRangePicker = () => {
  const [date, setDate] = useState<DateRange<Date>>([null, null]);

  return (
    <Box>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}>To</Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  );
};
