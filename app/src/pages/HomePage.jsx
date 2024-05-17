import ProgressBar from "../components/ProgressBar/ProgressBar.js";
import "../styles/HomePage.css";
import Button from "../widgets/Button/Button.jsx";

export const HomePage = () => {
  return (
    <div className="page_wrapper">
      <div className="left_part">
        <div className="achievements">
          <p>я ничего не добился</p>
        </div>
        <div className="battle">
          <p>го пиздиться</p>
        </div>
      </div>
      <div className="avatar_wrapper">
        <img src="" alt='ёбик' />
      </div>
      <div className="progress-container">
        <ProgressBar width={10}/>
      <ProgressBar width={20}/>
      <ProgressBar width={60}/>
      <ProgressBar width={90}/>
      </div>
      

      
      <Button>button</Button>
    </div>
  );
};
