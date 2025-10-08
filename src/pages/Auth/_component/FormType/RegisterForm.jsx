import style from "./FormType.module.css";
import { SvgEmail } from "../../../../assets/icons/SvgEmail";
import { SvgUser } from "../../../../assets/icons/SvgUser";
import { SvgPassword } from "../../../../assets/icons/SvgPassword";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z\s]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  function isValidEmail(email) {
    return emailRegix.test(email);
  }
  function isValidName(name) {
    return nameRegex.test(name);
  }
  function isValidPassword(Password) {
    return passwordRegex.test(Password);
  }
  const saveToLocalStorage = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };
  const loadFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    let users = loadFromLocalStorage();

    if (!name || !email || !password) {
      setError("باید تمام فیلدها پر شوند");
      return;
    }
    if (
      !isValidName(name) ||
      !isValidEmail(email) ||
      !isValidPassword(password)
    ) {
      setError("فرم به درستی پر نشده");
      return;
    }
    const userExist = users.some((u) => u.email === email);
    if (userExist) {
      setError("این کاربر قبلا ثبت نام کرده است.");
      return;
    }
    const newUser = {
      name,
      email,
      password,
    };
    users.push(newUser);
    saveToLocalStorage(users);
    setMessage("ثبت‌نام با موفقیت انجام شد");
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className={style.form_container}>
        <p className={message ? style.success : ""}>{message}</p>

        <form onSubmit={handelSubmit}>
          <div className={style.input_wrapper}>
            <label>
              <div>
                <SvgUser className={style.svg_icon} />
              </div>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="نام خود را وارد کنید"
              />
            </label>
            {!isValidName(name) && name.length > 0 && (
              <p className={style.error}>* نام باید انگلیسی باشد.</p>
            )}
          </div>
          <div className={style.input_wrapper}>
            <label>
              <div>
                <SvgEmail className={style.svg_icon} />
              </div>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل خود را وارد کنید"
              />
            </label>
            {!isValidEmail(email) && email.length > 0 && (
              <p className={style.error}>* ایمیل صحیح نمیباشد.</p>
            )}
          </div>
          <div className={style.input_wrapper}>
            <label>
              <div>
                <SvgPassword className={style.svg_icon} />
              </div>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="پسورد خود را وارد کنید"
              />
            </label>
            {!isValidPassword(password) && password.length > 0 && (
              <p className={style.error}>
                * پسورد باید حداقل ۸ کاراکتر، شامل حروف بزرگ و کوچک و عدد باشد.
              </p>
            )}
          </div>

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
