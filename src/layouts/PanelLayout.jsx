import { Main } from "./Main";
import { SideBar } from "./SideBar";
import style from "./PanelLayout.module.css";
import { useState } from "react";
export const PanelLayout = () => {
  const [handleSideBar, setHandleSideBar] = useState(false);

  return (
    <>
      <div className={style.panel_container}>
        <SideBar
          handleSideBar={handleSideBar}
          setHandleSideBar={setHandleSideBar}
        />
        <Main
          handleSideBar={handleSideBar}
          setHandleSideBar={setHandleSideBar}
        />
      </div>
    </>
  );
};
