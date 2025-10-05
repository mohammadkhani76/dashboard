import style from "./Form.module.css";
import { SvgEmail } from "../../../icons/SvgEmail";
import { SvgPassword } from "../../../icons/SvgPassword";
export const LoginForm = () => {
  return (
    <>
      <div className={style.form_container}>
        <form>
          <label>
            <div>
              <SvgEmail className={style.svg_icon} />
            </div>
            <input type="email" placeholder="ایمیل خود را وارد کنید" />
          </label>
          <label>
            <div>
              <SvgPassword className={style.svg_icon} />
            </div>
            <input type="password" placeholder="پسورد خود را وارد کنید" />
          </label>
          <button className={style.auth_form_btn}>ورود</button>
        </form>
      </div>
    </>
  );
};
