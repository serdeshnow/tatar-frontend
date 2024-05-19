import { useEffect, useState } from "react";
import "../styles/GameTestPage.css";
import RadioForm from "../widgets/RadioForm/RadioForm";

export const GameTestPage = () => {
  const [button1, setButton1] = useState(false);
  const radioQuestion = "bui";

  const [curr, setCurr] = useState(1);
  const [res, setRes] = useState({});

  useEffect(() => {
    console.log(Object.values(res));
  }, [res]);

  const getForm = () => {
    switch (true) {
      case curr == 1: {
        return (
          <RadioForm
            curr={curr}
            setCurr={setCurr}
            res={res}
            setRes={setRes}
            q1={radioQuestion}
            setChecked={setButton1}
          />
        );
      }
      case curr == 2: {
        return (
          <RadioForm
            curr={curr}
            setCurr={setCurr}
            res={res}
            setRes={setRes}
            q1={radioQuestion}
            setChecked={setButton1}
          />
        );
      }
      case curr == 3: {
        return (
          <RadioForm
            curr={curr}
            setCurr={setCurr}
            res={res}
            setRes={setRes}
            q1={radioQuestion}
            setChecked={setButton1}
          />
        );
      }
      case curr == 4: {
        return (
          <RadioForm
            curr={curr}
            setCurr={setCurr}
            res={res}
            setRes={setRes}
            q1={radioQuestion}
            setChecked={setButton1}
          />
        );
      }
    }
  };

  return (
    <div className="page_wrapper">
      <h1>Test Name</h1>
      <p>Вопрос 1</p>
      <p className="question">Question</p>
      <div className="forms_wrapper">{getForm()}</div>
      {/* <button className="start_btn">Продолжить</button> */}
    </div>
  );
};
