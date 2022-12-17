import "./App.css";

import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
import { MuiNavbar } from "./components/MuiNavbar";

function App() {
  return (
    <div className="App">
      <MuiNavbar />
      <MuiBreadcrumbs />
    </div>
  );
}

export default App;
