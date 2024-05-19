import { useState } from "react";
import "../styles/GameTestPage.css";
import RadioForm from "../widgets/RadioForm/RadioForm";

export const GameTestPage = () => {
  const [radioForm, setRadioForm] = useState(false);
  const radioQuestion = "hui";
  const id = "1";

  return (
    <div className="page_wrapper">
      <h1>Test Name</h1>
      <p>Вопрос 1</p>
      <p className="question">Question</p>
      <div className="forms_wrapper">
        <RadioForm id={id} radioQuestion={radioQuestion} />
        <RadioForm id="2" radioQuestion="huh" />
      </div>

      <button className="start_btn">Продолжить</button>
    </div>
  );
};
