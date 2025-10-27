import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Auth } from "./pages/Auth/Auth";
import { PanelLayout } from "./layouts/PanelLayout";
import { ApplicationManagement } from "./pages/Application/ApplicationManagement";
import { Settings } from "./pages/Setting/Settings";
import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/panel" element={<PanelLayout />}>
            <Route
              path="application/management"
              element={<ApplicationManagement />}
            />
            <Route path="setting" element={<Settings />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
