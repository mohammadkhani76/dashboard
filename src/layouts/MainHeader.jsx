import { useState } from "react";
import { SvgMenu } from "../assets/icons/SvgMenu";
import { SvgSearch } from "../assets/icons/SvgSearch";
import profileImg from "./../assets/pic/profile-picture.png";
import style from "./PanelLayout.module.css";
import { DropDownSettings } from "./DropDownSettings";

export const MainHeader = ({ setHandleSideBar }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <>
      <div className={style.main_header}>
        <div className={style.main_header_right}>
          <p>داشبورد</p>
          <button
            className={style.main_header_right_icon}
            onClick={() => setHandleSideBar((prev) => !prev)}
          >
            <SvgMenu />
          </button>
        </div>
        <form className={style.main_header_center}>
          <button>
            <SvgSearch />
          </button>
          <input placeholder="جستجو کنید" />
        </form>

        <div
          className={style.main_header_left}
          onClick={() => {
            setVisibleModal((prev) => !prev);
          }}
        >
          <img src={profileImg} alt="profile" />
          <div>
            <span>نازنین خانی</span>
            <span>khani@gmail.com</span>
          </div>
        </div>
      </div>

      <DropDownSettings
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
      />
    </>
  );
};
