import "./App.css";

import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
import { MuiDrawer } from "./components/MuiDrawer";
import { MuiNavbar } from "./components/MuiNavbar";
import { MuiSpeedDial } from "./components/MuiSpeedDial";

function App() {
  return (
    <div className="App">
      <MuiNavbar />
      <MuiBreadcrumbs />
      <MuiDrawer />
      <MuiSpeedDial />
    </div>
  );
}

export default App;
