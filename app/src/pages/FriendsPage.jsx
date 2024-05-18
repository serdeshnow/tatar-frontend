import "../styles/FriendsPage.css";
import TextFrom from "../widgets/TextForm/TextForm.jsx";
import Button from "../widgets/Button/Button.jsx";

export const FriendsPage = () => {
  return (
    <div className="friends_wrapper page_wrapper">
      <h1>FriendsPage</h1>
      <div className="form_wrapper">
        <TextFrom labelTitle="Почта" id="mail" />
        <TextFrom labelTitle="Пароль" id="password" />
        <Button className="green_enter_btn">Войти</Button>
      </div>
    </div>
  );
};
