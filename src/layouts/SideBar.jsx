import { useState } from "react";
import { SvgLogo } from "../assets/icons/SvgLogo";
import { SvgPlus } from "../assets/icons/SvgPlus";
import style from "./PanelLayout.module.css";
import { menu } from "../constants/Layout-const";
import { ProfileSidebar } from "./ProfileSidebar";
import { ThemeSidebar } from "./ThemeSidebar";
import { SvgMenu } from "../assets/icons/SvgMenu";
import { useNavigate } from "react-router";

export const SideBar = ({ handleSideBar, setHandleSideBar }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(-1);
  const navigate = useNavigate();
  const handelSubMenu = (index, item) => {
    if (item.path) {
      // location.href = item.path ;
      navigate(item.path);
      setActiveSubMenu(index);
      return;
    }
    if (activeSubMenu == index) {
      setActiveSubMenu(-1);
    } else {
      setActiveSubMenu(index);
    }
  };
  return (
    <>
      <div
        className={`${style.sidebar} ${handleSideBar && style.sidebar_small}`}
      >
        <div className={style.sidebar_header}>
          <button onClick={() => setHandleSideBar((prev) => !prev)}>
            <SvgMenu />
          </button>
          <SvgLogo className={style.sidebar_logo} />
          <h2>Razi Hospital</h2>
        </div>
        <div className={style.sideBar_center}>
          <button className={style.sideBar_center_newProject}>
            <span>پروژه جدید</span>
            <SvgPlus />
          </button>
          <ul>
            {menu.map((item, index) => (
              <li
                key={index}
                className={`${style.sidebar_center_item} ${
                  activeSubMenu === index && style.sidebar_center_item_active
                }`}
              >
                <button onClick={() => handelSubMenu(index, item)}>
                  <span>{item.title}</span>
                  {item.icon}
                </button>
                {/* <button
                  onClick={() =>
                    setActiveSubMenu(activeSubMenu === index ? -1 : index)
                  }
                ></button> */}
                {item.subMenu && (
                  <>
                    <SubMenu
                      submenu={item.subMenu}
                      handelSubMenu={handelSubMenu}
                      parentIndex={index}
                    />
                    <SideMenu
                      submenu={item.subMenu}
                      handelSubMenu={handelSubMenu}
                      parentIndex={index}
                    />
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        {handleSideBar === false && (
          <>
            <ProfileSidebar />
            <ThemeSidebar />
          </>
        )}
      </div>
    </>
  );
};

const SubMenu = ({ submenu, handelSubMenu, parentIndex }) => {
  return (
    <>
      <div className={style.sidebar_center_item_submenu}>
        {submenu.map((item, index) => (
          <div
            key={index}
            onClick={() => handelSubMenu(parentIndex, item)}
            className={style.sidebar_center_item_submenu_item}
          >
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
};

const SideMenu = ({ submenu, handelSubMenu, parentIndex }) => {
  return (
    <>
      <div className={style.sidebar_center_item_sidemenu}>
        {submenu.map((item, index) => (
          <div
            key={index}
            onClick={() => handelSubMenu(parentIndex, item)}
            className={style.sidebar_center_item_sidemenu_item}
          >
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
};
