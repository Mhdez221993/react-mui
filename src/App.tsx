import "./App.css";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { MuiMasonry } from "./components/MuiMasonry";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <MuiMasonry />
      </div>
    </LocalizationProvider>
  );
}

export default App;
