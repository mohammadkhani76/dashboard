import style from "./PanelLayout.module.css";
import { MainHeader } from "./MainHeader";

export const Main = ({ handleSideBar, setHandleSideBar }) => {
  return (
    <>
      <main className={`${style.main} ${handleSideBar && style.main_full}`}>
        <MainHeader setHandleSideBar={setHandleSideBar} />
      </main>
    </>
  );
};
