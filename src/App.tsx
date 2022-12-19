import "./App.css";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { MuiTabs } from "./components/MuiTabs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <MuiTabs />
      </div>
    </LocalizationProvider>
  );
}

export default App;
