import "../../styles/RegistrationIntroduction2Page.css";
import { Link } from "react-router-dom";
import Button from "../../widgets/Button/Button.jsx";

export const RegistrationIntroduction2Page = () => {
  console.log("Reg2");
  return (
    <div className="reg2_page_wrapper">
      <h1 className="reg2_title">
        <a href="/" className="alga">
          Алга
        </a>
        - вперёд!
      </h1>
      <h1 className="reg2_title">И мы не останавливаемся</h1>
      <Link to="/registration/introduction_4">
        <Button>Алга</Button>
      </Link>
    </div>
  );
};
