import "../styles/SignUpPage.css";
import Button from "../widgets/Button/Button.jsx";
import DropDown from "../widgets/MUI/DropDown.js";

export const SignUpPage = () => {
  return (
    <div className="page_wrapper">
      <h1>SignUpPage</h1>
      <p>Link to </p>
      <p className="home">Big tech</p>
      <DropDown />
      <Button>button</Button>
    </div>
  );
};
