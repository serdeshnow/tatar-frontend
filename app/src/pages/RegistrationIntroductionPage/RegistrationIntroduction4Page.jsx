import "../../styles/RegistrationIntroduction4Page.css";
import { Link } from "react-router-dom";
import Button from "../../widgets/Button/Button.jsx";

export const RegistrationIntroduction4Page = () => {
  console.log("Reg4");
  return (
    <div className="page_wrapper">
      <h1>Вы молодец!</h1>
      <h1>Давайте завершим регистрацию</h1>
      <TextForm />
      <TextForm />
      <TextForm />
      <Link to="/">
        <Button>GotoHome</Button>
      </Link>
    </div>
  );
};
