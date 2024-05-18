import "../styles/PersonalAccountPage.css";
import ProgressBar from "../components/ProgressBar/ProgressBar.js";
import avatar from "../assets/png/boychik.png";
import fire from "../assets/svg/fire.svg";
import book from "../assets/svg/book.svg";
import friend_avatar from "../assets/png/gelya.png";
import ProgressBarContainer from "../components/ProgressBarContainer/ProgressBarContainer.js";

export const PersonalAccountPage = () => {
  return (
    <div className="page_wrapper">
      <div className="left_block">
        <div className="achievements">
          <h1 className="title">Достижения:</h1>
          <div className="days_counter">
            <img src={fire} className="counter_icon" alt="" />
            <p className="counter_txt">Вы заходите уже 5 дней!</p>
          </div>
          <div className="words_counter">
            <img src={fire} className="counter_icon" alt="" />
            <img src={book} className="counter_icon" alt="" />
            <p className="counter_txt">8 новых слов за последнюю неделю</p>
          </div>
        </div>
        <div className="battle">
          <h1 className="title">Бросить вызов!</h1>
          <div className="battle_call">
            <img src={fire} className="counter_icon" alt="" />
            <img src={friend_avatar} className="avatar_battle" alt="" />
            <p className="counter_txt">Геля ждёт Вашего ответа</p>
          </div>
        </div>
      </div>
      <div className="avatar_wrapper">
        <img src={fire} className="counter_icon" alt="" />
        <img src={avatar} className="avatar_img" alt="" />
        <button className="start_btn">Начать!</button>
      </div>
      <div className="progress-container">
        <p className="level_bar">уровень 1</p>
        <ProgressBar isMain={true} width={10} />
        <ProgressBarContainer label="Грамматика" value={20} />
        {/* хуярь данные об уровнях с бека в value */}
        <ProgressBarContainer label="Вокабуляр" value={60} />
        <ProgressBarContainer label="Говорение" value={90} />

        <button>курсы</button>
      </div>
    </div>
  );
};
