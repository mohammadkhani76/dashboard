import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Auth } from "./pages/Auth/Auth";
import { PanelLayout } from "./layouts/PanelLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/panel" element={<PanelLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
