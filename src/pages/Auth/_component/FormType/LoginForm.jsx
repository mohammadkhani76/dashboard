import style from "./FormType.module.css";
import { SvgPassword } from "../../../../assets/icons/SvgPassword";
import { SvgEmail } from "../../../../assets/icons/SvgEmail";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const LoginForm = () => {
  return (
    <>
      <div className={style.form_container}>
        <form>
          <div className={style.input_wrapper}>
            <label>
              <div>
                <SvgEmail className={style.svg_icon} />
              </div>
              <Input type="email" placeholder="ایمیل خود را وارد کنید" />
            </label>
          </div>
          <div className={style.input_wrapper}>
            <label>
              <div>
                <SvgPassword className={style.svg_icon} />
              </div>
              <Input type="password" placeholder="پسورد خود را وارد کنید" />
            </label>
          </div>

          <Button className={style.auth_form_btn} text="ورود" type="submit" />
        </form>
      </div>
    </>
  );
};
