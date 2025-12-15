import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Auth } from "./pages/Auth/Auth";
import { PanelLayout } from "./layouts/PanelLayout";
import { Settings } from "./pages/Setting/Settings";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { ProductManagement } from "./pages/Product/management/ProductManagement";
import { ProductAdd } from "./pages/Product/add/ProductAdd";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/" element={<PanelLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product/management" element={<ProductManagement />} />
            <Route path="product/add" element={<ProductAdd />} />
            <Route path="setting" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
