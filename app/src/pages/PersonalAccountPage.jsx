import "../styles/PersonalAccountPage.css";
import ProgressBar from "../components/ProgressBar/ProgressBar.js";
import avatar from "../assets/svg/avatar.svg";
import fire from "../assets/svg/fire.svg";
import book from "../assets/svg/book.svg";
import friend_avatar from "../assets/svg/friend_avatar.svg";
import ProgressBarContainer from "../components/ProgressBarContainer/ProgressBarContainer.js";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export const PersonalAccountPage = () => {
  const [resDataUser, setResDataUser] = useState({});
  const [cookies, setCookies] = useCookies(["id"]);
  const [hasData, setHasData] = useState(false);
  useEffect(() => {
    if (cookies.id) {
      setHasData(true);
    }
  }, [cookies.id]);

  const get = async () => {
    await axios
      .get(`http://81.31.247.55:8080/user/get/{id}?id=${cookies.id}`)
      .then((res) => {
        console.log("GetRes", res);
        console.log("GetResData", res.data);
        console.log("GetResDataUser", res.data.user);
        setResDataUser(res.data.user);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    get();
  }, []);
  return (
    <div className="persAcc_page_wrapper">
      {hasData && console.log("PersonalPage", cookies)}
      <div className="progress-container">
        <p className="level_bar">уровень {resDataUser.level}</p>
        <ProgressBar isMain={true} width={10} />
        <ProgressBarContainer label="Грамматика" value={resDataUser.grammar} />
        {/* хуярь данные об уровнях с бека в value */}
        <ProgressBarContainer
          label="Вокабуляр"
          value={resDataUser.vocabulary}
        />
        <ProgressBarContainer label="Говорение" value={resDataUser.speaking} />
        {/* перенести и напилить */}
        {/* <button>курсы</button> */}
      </div>

      <div className="avatar_wrapper">
        {/* <img src={fire} className="counter_icon" alt="" /> */}
        <img src={avatar} className="avatar_img" alt="" />
        <button className="start_btn">Начать!</button>
      </div>

      <div className="right_block">
        <div className="achievements">
          <h1 className="acc_title">Достижения:</h1>
          <div className="days_counter">
            <img src={fire} className="counter_icon" alt="" />
            <p className="counter_txt">
              Вы заходите уже {resDataUser.days} дней!
            </p>
          </div>
          <div className="words_counter">
            {/* <img src={fire} className="counter_icon" alt="" /> */}
            <img src={book} className="counter_icon" alt="" />
            <p className="counter_txt">
              {resDataUser.achievement} новых слов за последнюю неделю
            </p>
          </div>
        </div>
        <div className="battle">
          <h1 className="acc_title">Бросить вызов!</h1>
          <div className="battle_call">
            {/* <img src={fire} className="counter_icon" alt="" /> */}
            <img src={friend_avatar} className="avatar_battle" alt="" />
            <p className="counter_txt">Геля ждёт Вашего ответа</p>
          </div>
        </div>
      </div>
    </div>
  );
};
