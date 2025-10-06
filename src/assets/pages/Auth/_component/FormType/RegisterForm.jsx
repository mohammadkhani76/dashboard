import style from "./FormType.module.css";
import { SvgEmail } from "../../../../icons/SvgEmail";
import { SvgUser } from "../../../../icons/SvgUser";
import { SvgPassword } from "../../../../icons/SvgPassword";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
export const RegisterForm = () => {
  return (
    <>
      <div className={style.form_container}>
        <form>
          <label>
            <div>
              <SvgUser className={style.svg_icon} />
            </div>
            <Input type="text" placeholder="نام خود را وارد کنید" />
          </label>
          <label>
            <div>
              <SvgEmail className={style.svg_icon} />
            </div>
            <Input type="email" placeholder="ایمیل خود را وارد کنید" />
          </label>
          <label>
            <div>
              <SvgPassword className={style.svg_icon} />
            </div>
            <Input type="password" placeholder="پسورد خود را وارد کنید" />
          </label>
          <Button
            className={style.auth_form_btn}
            text="ثبت نام"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};
