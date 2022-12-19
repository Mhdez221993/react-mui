import "./App.css";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { MuiTimeLine } from "./components/MuiTimeLine";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <MuiTimeLine />
      </div>
    </LocalizationProvider>
  );
}

export default App;
