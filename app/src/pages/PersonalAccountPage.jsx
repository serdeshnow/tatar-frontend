import "../styles/PersonalAccountPage.css";
import ProgressBar from "../components/ProgressBar/ProgressBar.js";
import avatar from "../assets/svg/avatar.svg";
import fire from "../assets/svg/fire.svg";
import book from "../assets/svg/book.svg";
import friend_avatar from "../assets/svg/friend_avatar.svg";
import ProgressBarContainer from "../components/ProgressBarContainer/ProgressBarContainer.js";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const PersonalAccountPage = () => {
  const [cookies, setCookies] = useCookies(["id"]);
  useEffect(() => {}, []);


  return (
    <div className="persAcc_page_wrapper">

      <div className="progress-container">
        <p className="level_bar">уровень 1</p>
        <ProgressBar isMain={true} width={10} />
        <ProgressBarContainer label="Грамматика" value={20} />
        {/* хуярь данные об уровнях с бека в value */}
        <ProgressBarContainer label="Вокабуляр" value={60} />
        <ProgressBarContainer label="Говорение" value={90} />
        {/* перенести и напилить */}
        

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
            <p className="counter_txt">Вы заходите уже 5 дней!</p>
          </div>
          <div className="words_counter">
            {/* <img src={fire} className="counter_icon" alt="" /> */}
            <img src={book} className="counter_icon" alt="" />
            <p className="counter_txt">8 новых слов за последнюю неделю</p>
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

        <input type="checkbox" id="hmt" class="hidden-menu-ticker"></input>

    <ul class="hidden-menu">
        <h1>Ваши курсы</h1> 
        <div className="course"></div>
        <div className="course"></div>
        <div className="course"></div>
        
    </ul>

    <label class="btn-menu" for="hmt">
      <span class="first"></span>
      <span class="second"></span>
      <span class="third"></span>
    </label>

      </div>

    
    

    </div>
  );
};
