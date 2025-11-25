import style from "./PanelLayout.module.css";
import profileImg from "./../assets/pic/profile-picture.png";
export const ProfileSidebar = () => {
  return (
    <>
      <div className={style.sidebar_profile}>
        <div className={style.sidebar_profile_info}>
          <div>
            <p>User name </p>
            <p>User@gmail.com</p>
          </div>
          <div>
            <img src={profileImg} alt="profile-img" />
          </div>
        </div>
        <div className={style.sidebar_profile_btn}>
          <button>profile</button>
        </div>
      </div>
    </>
  );
};
