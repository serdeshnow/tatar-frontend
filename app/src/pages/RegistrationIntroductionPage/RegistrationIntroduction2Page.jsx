import "../../styles/RegistrationIntroduction2Page.css";
import { Link } from "react-router-dom";
import Button from "../../widgets/Button/Button.jsx";

export const RegistrationIntroduction2Page = () => {
  console.log("Reg2");
  return (
    <div style={{height: '100vh', display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: "#FCFADD"}}>
<div className="reg2_page">
    <div className="reg2_page_wrapper">
      <h1 className="reg2_title"><a className="alga_txt">Алга</a> - вперёд!</h1>
      <h1 className="reg2_title">И мы не останавливаемся</h1>
      <Link to="/registration/introduction_3">
        <button className="alga_btn">Алга</button>
      </Link>
    </div>
    </div>
    </div>
    
  );
};
