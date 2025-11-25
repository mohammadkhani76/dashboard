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
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/" element={<PanelLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="application/management"
              element={<ApplicationManagement />}
            />
            <Route path="setting" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
