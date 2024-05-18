import "../../styles/RegistrationIntroduction2Page.css";
import { Link } from "react-router-dom";
import Button from "../../widgets/Button/Button.jsx";

export const RegistrationIntroduction2Page = () => {
  console.log("Reg2");
  return (
    <div className="page_wrapper">
      <h1>RegistrationIntroduction2Page</h1>
      <Link to="/registration/introduction_3">
        <Button>Goto3</Button>
      </Link>
    </div>
  );
};
