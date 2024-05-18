import "../styles/FriendsPage.css";
import TextFrom from "../widgets/TextForm/TextForm.jsx";
import Button from "../widgets/Button/Button.jsx";
import DropdownForm from "../widgets/DropdownForm/DropdownForm.jsx";

export const FriendsPage = () => {
  return (
    <div className="friends_wrapper">
      <h1>FriendsPage (инфа - логин)</h1>
      <div className="form_wrapper">
        <TextFrom labelTitle="Почта" id="mail" />
        <TextFrom labelTitle="Пароль" id="password" />
        <Button className="green_enter_btn">Войти</Button>
      </div>
      <div>
        <DropdownForm labelTitle="Направление">
          <option value="grammar">Грамматика</option>
          <option value="vocabulary">Словарь</option>
          <option value="speaking">Говорение</option>
        </DropdownForm>
      </div>
    </div>
  );
};
