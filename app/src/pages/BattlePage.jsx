import { useEffect, useState } from "react";
import RadioForm from "../widgets/RadioForm/RadioForm";
import "../styles/BattlePage.css";
import { Link } from "react-router-dom";

export const BattlePage = () => {
  const [button1, setButton1] = useState(false);
  const radioQuestion = "bui";

  const [curr, setCurr] = useState(1);
  const [res, setRes] = useState({});

  useEffect(() => {
    console.log(Object.values(res));
  }, [res]);

  const q1 = "lui";
  const id1 = 1;
  const q2 = "hit";
  const id2 = 2;
  const q3 = "nit";
  const id3 = 3;
  const idcorrect = 1;

  const getForm = () => {
    switch (true) {
      case curr === 1: {
        return (
          <RadioForm
            q1={q1}
            id1={id1}
            q2={q2}
            id2={id2}
            q3={q3}
            id3={id3}
            idcorrect={idcorrect}
            curr={curr}
            setCurr={setCurr}
            res={res}
            setRes={setRes}
            setChecked={setButton1}
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
            setChecked={setButton1}
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
            setChecked={setButton1}
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
            setChecked={setButton1}
          />
        );
      }
      case curr === 5: {
        return (
          <div>
            <h1>Вы молодец!</h1>
            <Link to="/">
              <button onClick={() => {}}>На главную</button>
            </Link>
          </div>
        );
      }
    }
  };

  return (
    <div className="page_wrapper">
      <h1>BattlePage</h1>
      <div className="forms_wrapper">{getForm()}</div>
      <div className="progress">{curr < 5 && <p>Вопрос {curr}/4</p>}</div>
    </div>
  );
};
