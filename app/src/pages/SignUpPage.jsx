import "../styles/SignUpPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextForm from "../widgets/TextForm/TextForm.jsx";
import axios from "axios";

export const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const post = async (email, password) => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    let data = {
      email: email,
      password: password,
    };
    await axios
      .post("http://81.31.247.55:8080/user/login", data, { headers })
      .then((res) => {
        if (res.status === 200) {
          let resData = res.data;
          console.log("resData", resData);
        }
        console.log(res.status);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    post(email, password);
  }, []);
  return (
    <div className="reg_page_wrapper">
      <h1 className="page_title">Вход</h1>
      <div className="form_wrapper">
        <TextForm
          labelTitle="Имя пользователя или почта"
          id="mail"
          type="text"
          textForm={email}
          setTextForm={setEmail}
        />
        <TextForm
          labelTitle="Пароль"
          id="password"
          type="password"
          textForm={password}
          setTextForm={setPassword}
        />
        <div className="empty" />
        <Link to="/">
          <button
            type="submit"
            className="green_enter_btn"
            onClick={() => post(email, password)}
          >
            Войти
          </button>
        </Link>
      </div>
    </div>
  );
};
