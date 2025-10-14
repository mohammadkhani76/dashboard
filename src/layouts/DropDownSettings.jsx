import { ThemeSidebar } from "./ThemeSidebar";
import { SvgUser } from "../assets/icons/SvgUser";
import { SvgLogout } from "../assets/icons/SvgLogout";
import style from "./PanelLayout.module.css";
import { useState } from "react";

export const DropDownSettings = ({ visibleModal, setVisibleModal }) => {
  const [lang, setLang] = useState("fa");
  const [theme, setTheme] = useState("dark");

  const langList = [
    {
      title: "فارسی",
      symbol: "fa",
    },
    {
      title: "انگلیسی",
      symbol: "en",
    },
    {
      title: "فرانسوی",
      symbol: "fr",
    },
    {
      title: "عربی",
      symbol: "ar",
    },
  ];

  return (
    <>
      {/* Modal */}
      <div
        className={`${style.main_header_modal} ${
          visibleModal && style.main_header_modal_active
        }`}
        onClick={() => setVisibleModal(false)}
      ></div>

      {/* Language Setting */}
      <div
        className={`${style.modal_setting}  ${
          visibleModal && style.modal_setting_avtive
        }`}
      >
        <div className={style.modal_setting_top}>
          {langList.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setLang(item.symbol);
              }}
              className={`${style.modal_setting_top_item} ${
                lang == item.symbol && style.modal_setting_top_item_active
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Theme Button */}
        <div className={style.modal_setting_theme_btn}>
          <button
            className={`${
              theme === "light" && style.modal_setting_theme_btn_active
            }`}
            onClick={() => setTheme("light")}
          >
            روشن
          </button>
          <button
            className={`${
              theme === "dark" && style.modal_setting_theme_btn_active
            }`}
            onClick={() => setTheme("dark")}
          >
            تاریک
          </button>
        </div>

        {/* Profile & Logout */}
        <div className={style.modal_setting_bottom}>
          <div className={style.modal_setting_bottom_item}>
            <span>پروفایل</span>
            <SvgUser />
          </div>
          <div className={style.modal_setting_bottom_item}>
            <span>خروج</span>
            <SvgLogout />
          </div>
        </div>
      </div>
    </>
  );
};
