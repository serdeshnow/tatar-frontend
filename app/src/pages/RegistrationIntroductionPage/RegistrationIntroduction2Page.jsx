import "../../styles/RegistrationIntroduction2Page.css";
import { Link } from "react-router-dom";

export const RegistrationIntroduction2Page = () => {
  console.log("Reg2");
  return (
    <div style={{display: "flex", height: "100vh", backgroundColor: '#FCFADD', alignItems: 'center'}}>
      {/* <div className="reg2_page_wrapper">
      <h1 className="reg2_title"><a className="alga_txt">Алга</a> - вперёд!</h1> */}
    <div className="reg2_page_wrapper">
      <h1 className="reg2_title"><a href="/" className="alga_txt">Алга</a> - вперёд!</h1>
      <h1 className="reg2_title">И мы не останавливаемся</h1>
      <Link to="/registration/introduction_4">
        <button className="alga_btn">Алга</button>
      </Link>
    </div>
    </div>
    // </div>
    
  );
};
