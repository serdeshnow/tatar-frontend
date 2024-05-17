import React from "react";
import "../Header/Header.css";
import logo from "../../assets/svg/logo.svg";
import echpochmack from "../../assets/svg/echpochmack.svg";
import profile_pic from "../../assets/png/profile_pic.png";

export default function Header() {
  return (
    <div className="header_wrapper">
      <div className="logo_wrapper">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="nav_wrapper">
        <li className="list_item">Друзья</li>
        <li className="list_item">Форум</li>
        <li className="list_item">Все курсы</li>
      </div>
      <div className="echpochmack_counter">
        <p>16</p>
        <img src={echpochmack} alt="" />
      </div>
      <div className="profile_img" alt="">
        <img src={profile_pic} alt="" />
      </div>
    </div>
  );
}
