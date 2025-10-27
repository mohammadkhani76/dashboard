import style from "./PanelLayout.module.css";
import { UseLayoutStore } from "../store/LayoutStore";
export const ThemeSidebar = () => {
  const { theme, setTheme } = UseLayoutStore();

  return (
    <>
      <div className={style.sidebar_theme}>
        {/* Theme Button with Zustand*/}
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
