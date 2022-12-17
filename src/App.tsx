import "./App.css";

import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
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
      <MuiBottomNavigation />
    </div>
  );
}

export default App;
