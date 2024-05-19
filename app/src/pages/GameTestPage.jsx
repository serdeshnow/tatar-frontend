import { useEffect, useState } from "react";
import "../styles/GameTestPage.css";
import RadioForm from "../widgets/RadioForm/RadioForm";
import { Link } from "react-router-dom";

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
      case curr === 1: {
        return (
          <RadioForm
            curr={curr}
            setCurr={setCurr}
            res={res}
            setRes={setRes}
            q1={radioQuestion}
          />
        );
      }
      case curr === 2: {
        return (
          <RadioForm
            curr={curr}
            setCurr={setCurr}
            res={res}
            setRes={setRes}
            q1={radioQuestion}
          />
        );
      }
      case curr === 3: {
        return (
          <RadioForm
            curr={curr}
            setCurr={setCurr}
            res={res}
            setRes={setRes}
            q1={radioQuestion}
          />
        );
      }
      case curr === 4: {
        return (
          <RadioForm
            curr={curr}
            setCurr={setCurr}
            res={res}
            setRes={setRes}
            q1={radioQuestion}
          />
        );
      }
      case curr === 5: {
        return (
          <div>
            <h1>Вы молодец!</h1>
            <Link to="/">
              <button>На главную</button>
            </Link>
          </div>
        );
      }
    }
  };

  return (
    <div className="test_page_wrapper">
      <h1 className="test_name">Название теста</h1>
      <p className="question_num">Вопрос 1</p>
      <p className="question_body">Тут будет Ваш вопрос</p>
      <div className="forms_wrapper">{getForm()}</div>
      {/* <button className="start_btn">Продолжить</button> */}
    </div>
  );
};
