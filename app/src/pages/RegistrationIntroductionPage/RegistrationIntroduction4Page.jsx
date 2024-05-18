import "../../styles/RegistrationIntroduction4Page.css";
import { Link } from "react-router-dom";
import Button from "../../widgets/Button/Button.jsx";
import TextForm from "../../widgets/TextForm/TextForm.jsx";
import DropdownForm from "../../widgets/DropdownForm/DropdownForm.jsx";

export const RegistrationIntroduction4Page = () => {
  console.log("Reg4");
  return (
    <div className="reg_page_wrapper">
      <h1>Вы молодец!</h1>
      <h1>Давайте завершим регистрацию</h1>
      <TextForm />
      <TextForm />
      <TextForm />
      <DropdownForm />
      <Link to="/">
        <Button>GotoHome</Button>
      </Link>
    </div>
  );
};
