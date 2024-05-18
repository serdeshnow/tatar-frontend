import "../../styles/RegistrationIntroduction1Page.css";
import { Link } from "react-router-dom";
import Button from "../../widgets/Button/Button.jsx";
import reg1_avatar from '../../assets/svg/reg1_avatar.svg'

export const RegistrationIntroduction1Page = () => {
  console.log("Reg1");
  return (
    <div className="reg1_page_wrapper">
      <div className="reg1_txt_container">
        <h1 className="reg1_title">Добро пожаловать в <br/> Белем сарае</h1>
        <p className="reg1_transcription">“Дворец знаний”</p>
        <h1 className="reg1_level_title">Давайте определим ваш уровень:</h1>
        <div className="reg1_btn_container">
        <Link to="/registration/introduction_2">
          <button className="reg1_btn">Никогда раньше не изучал</button>
          <button className="reg1_btn">Знаю несколько слов и фраз</button>
          <button className="reg1_btn">Могу поддержать простой диалог</button>
        </Link>
        </div>
      </div>
      <div className="reg1_img_container">
        <img src={reg1_avatar} alt='avatar' className="reg1_img"/>
      </div>
    </div>
  );
};
