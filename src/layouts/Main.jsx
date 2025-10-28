import style from "./PanelLayout.module.css";
import { MainHeader } from "./MainHeader";
import { Outlet } from "react-router";

export const Main = ({ handleSideBar, setHandleSideBar }) => {
  return (
    <>
      <main className={`${style.main} ${handleSideBar && style.main_full}`}>
        <MainHeader setHandleSideBar={setHandleSideBar} />
        <div className={style.mainCont}>
          <Outlet />
        </div>
        {/* 
         {children} // اینو تحت عنوان پراپ هم پاس بده به مین
         <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/application/management" element={<ApplicationManagement />} />

          </Routes> */}
      </main>
    </>
  );
};
