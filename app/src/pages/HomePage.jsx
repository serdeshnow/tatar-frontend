
import "../styles/HomePage.css";
import Button from "../widgets/Button/Button.jsx";
import DropDown from "../widgets/MUI/DropDown.js";

export const HomePage = () => {
  return (
    <div className="page_wrapper">
      <h1>HomePage</h1>
      <p>Link to </p>
      <p className="home">Big tech</p>
      <DropDown />
      <Button>button</Button>
    </div>
  );
};
