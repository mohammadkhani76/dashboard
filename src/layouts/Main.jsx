import { SvgMenu } from "../assets/icons/SvgMenu";
import { SvgSearch } from "../assets/icons/SvgSearch";
import style from "./PanelLayout.module.css";
import profileImg from "./../assets/pic/profile-picture.png";

export const Main = ({ handleSideBar, setHandleSideBar }) => {
  return (
    <>
      <main className={`${style.main} ${handleSideBar && style.main_full}`}>
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

          <div className={style.main_header_left}>
            <img src={profileImg} alt="profile" />
            <div>
              <span>نازنین خانی</span>
              <span>khani@gmail.com</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
