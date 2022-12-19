import "./App.css";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { MuiDateRangePicker } from "./components/MuiDateRange";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <MuiDateRangePicker />
      </div>
    </LocalizationProvider>
  );
}

export default App;
