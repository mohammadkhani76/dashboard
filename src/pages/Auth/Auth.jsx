import style from "./Auth.module.css";
import { AnimatedBorder } from "../../components/AnimatedBorder/AnimatedBorder";
import { SvgLogo } from "../../assets/icons/SvgLogo";
import { useState } from "react";
import { LoginForm } from "./_component/FormType/LoginForm";
import { RegisterForm } from "./_component/FormType/RegisterForm";
import { SvgAuthFooter } from "../../assets/icons/SvgAuthFooter";
import { Button } from "./_component/Button/Button";

export const Auth = () => {
  const [formType, setFormType] = useState("login");

  return (
    <>
      <div className={style.auth__container}>
        <AnimatedBorder>
          <SvgLogo className={style.auth_container_logo} />
          <div className={style.auth_line}></div>
          <div className={style.auth_switch}>
            <Button
              text="ورود"
              className={`${formType === "login" ? style.active : ""}`}
              onClick={() => setFormType("login")}
            />
            {/* <button
              className={`${formType === "login" ? style.active : ""}`}
              onClick={() => setFormType("login")}
            >
              ورود
            </button> */}
            <Button
              text="ثبت نام"
              className={`${formType === "register" ? style.active : ""}`}
              onClick={() => setFormType("register")}
            />
            {/* <button
              className={`${formType === "register" ? style.active : ""}`}
              onClick={() => setFormType("register")}
            >
              ثبت نام
            </button> */}
          </div>
          {formType == "login" && <LoginForm />}
          {formType == "register" && <RegisterForm />}
        </AnimatedBorder>
        <footer>
          <SvgAuthFooter className={style.footer_icon} />
          <div>
            <h2>Razi Hospital</h2>
            <SvgLogo className={style.footer_logo} />
          </div>
        </footer>
      </div>
    </>
  );
};
