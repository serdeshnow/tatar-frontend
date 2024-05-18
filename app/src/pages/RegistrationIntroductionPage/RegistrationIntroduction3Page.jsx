import "../../styles/RegistrationIntroduction3Page.css";
import { Link } from "react-router-dom";
import Button from "../../widgets/Button/Button.jsx";

export const RegistrationIntroduction3Page = () => {
  console.log("Reg3");
  return (
    <div className="reg_page_wrapper">
      <h1>RegistrationIntroduction3Page</h1>
      <Link to="/registration/introduction_4">
        <Button>Goto4</Button>
      </Link>
    </div>
  );
};
