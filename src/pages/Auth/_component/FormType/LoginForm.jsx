import style from "./FormType.module.css";
import { SvgPassword } from "../../../../assets/icons/SvgPassword";
import { SvgEmail } from "../../../../assets/icons/SvgEmail";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const loadFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    const users = loadFromLocalStorage();

    if (!email || !password) {
      setError("باید تمام فیلدها پر شوند");
      return;
    }
    const data = { email, password };
    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (validUser) {
      const token = btoa(
        JSON.stringify({
          name: validUser.name,
          exp: Date.now() + 1000 * 60 * 60 * 24,
        })
      );
      localStorage.setItem("token", token);
      localStorage.setItem("loggedUser", validUser.name);
      console.log(data);
      setMessage(`خوش آمدید ${validUser.name}`);
      setEmail("");
      setPassword("");
      // window.location.href = "./panel";
      navigate("/panel");
      return;
    }
    setError("ایمیل یا پسورد اشتباه است");
  };
  return (
    <>
      <div className={style.form_container}>
        <p className={message ? style.success : ""}>{message}</p>
        <p className={error ? style.error : ""}>{error}</p>

        <form onSubmit={handelSubmit}>
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
          </div>

          <Button className={style.auth_form_btn} text="ورود" type="submit" />
        </form>
      </div>
    </>
  );
};
