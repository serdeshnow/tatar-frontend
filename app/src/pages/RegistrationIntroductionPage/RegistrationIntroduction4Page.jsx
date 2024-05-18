import "../../styles/RegistrationIntroduction4Page.css";
import { Link } from "react-router-dom";
import Button from "../../widgets/Button/Button.jsx";
import TextForm from "../../widgets/TextForm/TextForm.jsx";
import DropdownForm from "../../widgets/DropdownForm/DropdownForm.jsx";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const RegistrationIntroduction4Page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pol, setPol] = useState("Мужской");

  const [cookies, setCookies] = useCookies(["id"]);
  const [redirect, setRedirect] = useState(false);

  const post = async (email, goal = "", nick, password, sex) => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    let data = {
      email: email,
      goal: goal,
      nick: nick,
      password: password,
      sex: sex,
    };
    await axios
      .post(
        "http://81.31.247.55:8080/swagger/index.html#/user/post_user_create",
        data,
        { headers }
      )
      .then((res) => {
        if (res.status === 200) {
          setCookies("id", res.data["id"], { path: "/" });
          setRedirect(true);
          console.log(res.data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  console.log("Reg4");

  return (
    <div className="reg_page_wrapper">
      {redirect && <Navigate replace to="/" />}
      <h1 className="reg_txt">Вы молодец!</h1>
      <h1 className="reg_txt">Давайте завершим регистрацию</h1>
      <TextForm
        id="nick"
        textForm={username}
        setTextForm={setUsername}
        labelTitle="Имя пользователя"
      />
      <TextForm
        id="email"
        textForm={email}
        setTextForm={setEmail}
        type="email"
        labelTitle="Почта"
      />
      <TextForm
        id="password"
        textForm={password}
        setTextForm={setPassword}
        type="password"
        labelTitle="Пароль"
      />
      <DropdownForm chosen={pol} setChosen={setPol} labelTitle="Пол">
      <option value="male">Мужской</option>
        <option value="female">Женский</option>
        </DropdownForm>
      <Link to="/">
        <button onClick={() => post(email, "", username, password, pol)} className="reg_btn">Зарегистрироваться</button>

      </Link>
    </div>
  );
};
