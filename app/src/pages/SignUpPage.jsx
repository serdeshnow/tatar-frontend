import "../styles/SignUpPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../widgets/Button/Button.jsx";
import TextForm from "../widgets/TextForm/TextForm.jsx";
import { Password } from "@mui/icons-material";
import axios from "axios";

export const SignUpPage = () => {
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
      .post("http", data, { headers })
      .then((res) => {
        if (res.status === 200) {
          let resId = res.id;
          console.log(resId.id);
        }
        console.log(res.status);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    post("string", "string");
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="reg_page_wrapper">
      <h1 className="page_title">Вход</h1>
      <div className="form_wrapper">
        <TextForm
          labelTitle="Имя пользователя или почта"
          id="mail"
          type="text"
        />
        <TextForm labelTitle="Пароль" id="password" type="password" />
        <div className="empty" />
        <Link to="/">
          <button type="submit" className="green_enter_btn">
            Войти
          </button>
        </Link>
      </div>
    </div>
  );
};
