import "../../styles/RegistrationIntroduction3Page.css";
import { Link } from "react-router-dom";
import Button from "../../widgets/Button/Button.jsx";
import TextForm from "../../widgets/TextForm/TextForm.jsx";

export const RegistrationIntroduction3Page = () => {
  console.log("Reg3");
  return (
    <div className="page_wrapper">
      <h1>Вы молодец!</h1>
      <h1>Давайте завершим регистрацию</h1>
      <TextForm />
      <TextForm />
      <TextForm />
      <Link to="/registration/introduction_3">
        <Button>Зарегистрироваться</Button>
      </Link>
    </div>
  );
};
