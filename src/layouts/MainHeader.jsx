import { useContext, useState } from "react";
import { SvgMenu } from "../assets/icons/SvgMenu";
import { SvgSearch } from "../assets/icons/SvgSearch";
import profileImg from "./../assets/pic/profile-picture.png";
import style from "./PanelLayout.module.css";
import { DropDownSettings } from "./DropDownSettings";
import { UseLayoutStore } from "../store/LayoutStore";
// import { TitleContext } from "../store/LayoutStore";

export const MainHeader = ({ setHandleSideBar }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  // const ctxTitle = useContext(TitleContext);
  const { title } = UseLayoutStore();

  return (
    <>
      <div className={style.main_header}>
        <div className={style.main_header_right}>
          <p>{title}</p>
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
