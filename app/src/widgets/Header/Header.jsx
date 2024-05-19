import { Link } from "react-router-dom";
import React from "react";
import "../Header/Header.css";
import logo from "../../assets/svg/logo.svg";
import echpochmack from "../../assets/svg/echpochmack.svg";
import profile_male from "../../assets/svg/profile_male.svg";

export default function Header() {
  return (
    <div className="header_wrapper">
      <div className="logo_wrapper">
        <Link to="/" className="logo_link">
          <img src={logo} className="logo" alt="" />
        </Link>
      </div>
      <div className="nav_wrapper">
        <li className="list_item">
          <Link to="registration">Reg</Link>
        </li>
        <li className="list_item" id="friends">
          <Link to="friends">Друзья</Link>
        </li>
        <li className="list_item" id="forum">
          <Link to="forum">Форум</Link>
        </li>
        <li className="list_item">
          <Link to="courses">Все курсы</Link>
        </li>
      </div>
      <div className="echpochmack_counter">
        <p className="echpochmak_amount">16</p>
        <Link to="shop" className="echpochmak_logo">
          <img src={echpochmack} alt="" />
        </Link>
      </div>
      <div alt="">
        <Link to="/" className="profile_logo">
          <img src={profile_male} className="profile_img" alt="" />
        </Link>
      </div>
    </div>
  );
}
