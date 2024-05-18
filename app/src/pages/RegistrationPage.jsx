import "../styles/RegistrationPage.css";
import { Link } from "react-router-dom";
import Button from "../widgets/Button/Button.jsx";

export const RegistrationPage = () => {
  return (
    <div className="page_wrapper">
      <h1>RegistrationPage</h1>
      <Link to="introduction_1">
        <Button>Goto1</Button>
      </Link>
    </div>
  );
};
