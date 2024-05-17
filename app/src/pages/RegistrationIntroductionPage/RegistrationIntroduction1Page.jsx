import "../../styles/RegistrationIntroduction1Page.css";
import { Link } from "react-router-dom";
import Button from "../../widgets/Button/Button.jsx";

export const RegistrationIntroduction1Page = () => {
  console.log("Reg1");
  return (
    <div className="page_wrapper">
      <h1>RegistrationIntroduction1Page</h1>
      <Link to="/registration/introduction_2">
        <Button>Goto2</Button>
      </Link>
    </div>
  );
};
