import { useState } from "react";
import style from "./PanelLayout.module.css";
export const ThemeSidebar = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <div className={style.sidebar_theme}>
        <div className={style.sidebar_theme_btn}>
          <button
            className={`${theme === "light" && style.sidebar_theme_btn_active}`}
            onClick={() => setTheme("light")}
          >
            روشن
          </button>
          <button
            className={`${theme === "dark" && style.sidebar_theme_btn_active}`}
            onClick={() => setTheme("dark")}
          >
            تاریک
          </button>
        </div>
      </div>
    </>
  );
};
