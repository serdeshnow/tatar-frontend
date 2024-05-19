import React, { useEffect, useState } from "react";
import "../styles/GameTestPage.css";
import RadioForm from "../widgets/RadioForm/RadioForm";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

export const GameTestPage = () => {
  const [data, setData] = useState({});
  const [cookies, setCookies] = useCookies(["id"]);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    if (cookies.id) {
      setHasData(true);
    }
  }, [cookies.id]);

  const get = async () => {
    await axios
      .get(`http://81.31.247.55:8080/test/{id}?id=${cookies.id}`)
      .then((res) => {
        console.log("GetTestRes", res);
        // console.log("GetResDataUser", res);
        // setData(res);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    get();
  }, []);

  const [button1, setButton1] = useState(false);
  const radioQuestion = "Ответ 1";

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
      {hasData && console.log("PersonalPage", cookies)}

      <h1 className="test_name">Название теста</h1>
      {curr < 5 && (
        <>
          <p className="question_num">Вопрос {curr}</p>
          <p className="question_body">Тут будет Ваш вопрос</p>
        </>
      )}

      <div className="forms_wrapper">{getForm()}</div>
      {/* <button className="start_btn">Продолжить</button> */}
    </div>
  );
};
