import "./App.css";

import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
import { MuiDrawer } from "./components/MuiDrawer";
import { MuiNavbar } from "./components/MuiNavbar";

function App() {
  return (
    <div className="App">
      <MuiNavbar />
      <MuiBreadcrumbs />
      <MuiDrawer />
    </div>
  );
}

export default App;
