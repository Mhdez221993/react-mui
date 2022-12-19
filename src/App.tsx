import "./App.css";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { MuiDateTimePicker } from "./components/MuiDateTimePiker";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <MuiDateTimePicker />
      </div>
    </LocalizationProvider>
  );
}

export default App;
