import "../styles/RegistrationPage.css";
import { Link } from "react-router-dom";
// import Button from "../widgets/Button/Button.jsx";
import reg_pic from "../assets/svg/reg_pic.svg";

export const RegistrationPage = () => {
  return (
    <div className="reg_page_wrapper">
      <div className="reg_pic_container">
        <img src={reg_pic} alt="" className="reg_pic" />
      </div>
      <div className="reg_btn_container">
        <h1 className="start_title">
          Преврати изучение татарского <br /> в интересную игру{" "}
        </h1>
        <Link to="introduction_1">
          <button className="reg_start_btn">Начать</button>
        </Link>
        <button className="already_reg">Уже есть аккаунт</button>
      </div>
    </div>
  );
};
