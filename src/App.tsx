import "./App.css";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { MuiResponsiveness } from "./components/MuiResponsiveness";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <MuiResponsiveness />
      </div>
    </LocalizationProvider>
  );
}

export default App;
