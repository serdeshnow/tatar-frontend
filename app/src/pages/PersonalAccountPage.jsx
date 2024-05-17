import "../styles/PersonalAccountPage.css";
import ProgressBar from "../components/ProgressBar/ProgressBar.js";
import avatar from '../assets/png/boychik.png'
import fire from '../assets/svg/fire.svg'
import book from '../assets/svg/book.svg'

export const PersonalAccountPage = () => {
  return (
    <div className="page_wrapper">
      <div className="left_block">
        <div className="achievements">
          <h1 className="ach_title">Достижения:</h1>
          <div className="days_counter">
            <img src={fire} alt="огонёк" />
            <p>Вы заходите уже 5 дней</p>
          </div>
          <div className="words_counter">
            <img src={book} alt="книга" />
            <p>8 новых слов Вы выучили за последнюю неделю</p>
          </div>
        </div>
        <div className="battle">
          <h1>Бросить вызов!</h1>
          
        </div>
      </div>
      <div className="avatar_wrapper">
        <img src={avatar} className="avatar_img" />
        <button>Начать</button>
      </div>
      <div className="progress-container">
        <p>уровень</p>
        <ProgressBar width={10}/>
        <a href="/">повысить</a>
        <p>Грамматика</p>
        <ProgressBar width={20}/>
        <a href="/">повысить</a>
        <p>Словарик</p>
        <ProgressBar width={60}/>
        <a href="/">повысить</a>
        <p>Говорение</p>
        <ProgressBar width={90}/>
        <a href="/">повысить</a>
        <button>курсы</button>
      </div>
    </div>
  );
};
