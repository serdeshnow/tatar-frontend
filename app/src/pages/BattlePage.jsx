import React, { useEffect, useState } from "react";
import RadioForm from "../widgets/RadioForm/RadioForm";
import "../styles/BattlePage.css";
import { Link } from "react-router-dom";
import friend_avatar from "../assets/svg/friend_avatar.svg";
import axios from "axios";
import { useCookies } from "react-cookie";
import star from '../assets/img/star.png'
import star1 from '../assets/img/star1.png'
import star2 from '../assets/img/star2.png'


export const BattlePage = () => {
  const [button1, setButton1] = useState(false);
  const radioQuestion = "bui";

  const [data, setData] = useState();
  const [cookies, setCookies] = useCookies(["id"]);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    if (cookies.id) {
      setHasData(true);
    }
  }, [cookies.id]);

  const get = async () => {
    // await axios
    //   .get(`http://81.31.247.55:8080/fight/{id}?id=${cookies.id}`)
    //   .then((res) => {
    //     console.log("GetResData", res.data);
    //     console.log("GetResDataUser", res.data.user);
    //     setData(res.data.user);
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
    await axios
      .get(`http://81.31.247.55:8080/fight/{id}?id=100`)
      .then((res) => {
        console.log("GetResDataTest", res.data.test);
        console.log(
          "GetResDataTestQuestions",
          res.data.test.questions[curr - 1].answers[0].name
        );
        console.log(
          "GetResDataTestQuestions2Answers1",
          res.data.test.questions[2].answers[1].name
        );
        setData(res.data.test);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    get();
  }, []);

  const [curr, setCurr] = useState(1);
  const [res, setRes] = useState({});

  useEffect(() => {
    console.log(Object.values(res));
  }, [res]);

  const id1 = 1;
  const id2 = 2;
  const id3 = 3;
  const idcorrect1 = 1;
  const idcorrect2 = 2;
  const idcorrect3 = 2;

  const getForm = () => {
    switch (true) {
      case curr === 1: {
        return (
          <RadioForm
            q1={data.questions[0].answers[0].name}
            // q1="hu"
            id1={id1}
            q2={data.questions[0].answers[1].name}
            // q2="i"
            id2={id2}
            q3={data.questions[0].answers[2].name}
            // q3="na"
            id3={id3}
            idcorrect={idcorrect1}
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
            q1={data.questions[1].answers[0].name}
            // q1="hu"
            id1={id1}
            q2={data.questions[1].answers[1].name}
            // q2="i"
            id2={id2}
            q3={data.questions[1].answers[2].name}
            // q3="na"
            id3={id3}
            idcorrect={idcorrect2}
            curr={curr}
            setCurr={setCurr}
            res={res}
            setRes={setRes}
            setChecked={setButton1}
          />
        );
      }
      case curr === 3: {
        return (
          <RadioForm
            q1={data.questions[2].answers[0].name}
            // q1="hu"
            id1={id1}
            q2={data.questions[2].answers[1].name}
            // q2="i"
            id2={id2}
            q3={data.questions[2].answers[2].name}
            // q3="na"
            id3={id3}
            idcorrect={idcorrect3}
            curr={curr}
            setCurr={setCurr}
            res={res}
            setRes={setRes}
            setChecked={setButton1}
          />
        );
      }
      case curr === 4: {
        return (
          <RadioForm
            q1={data.questions[3].answers[0].name}
            // q1="hu"
            id1={id1}
            q2={data.questions[3].answers[1].name}
            // q2="i"
            id2={id2}
            q3={data.questions[3].answers[2].name}
            // q3="na"
            id3={id3}
            idcorrect={idcorrect3}
            curr={curr}
            setCurr={setCurr}
            res={res}
            setRes={setRes}
            setChecked={setButton1}
          />
        );
      }
      default:
        return <></>;
      case curr === 5: {
        return (
          <div>
            <img src={star} alt="" />
            <img src={star1} alt="" />
            <img src={star2} alt="" />

            <h1>Вы молодец!</h1>
            <p>Ждем результатов соперника</p>
            <Link to="/">
              <button className="toMain_btn">На главную</button>
            </Link>
          </div>
        );
      }
    }
  };
  if (data)
    return (
      <div className="page_wrapper">
        {hasData && console.log("PersonalPage", cookies)}
        <div className="title_form_wrapper">
          {data.questions[Math.min(curr - 1, data.questions.length - 1)]
            .description &&
            curr < 5 && (
              <h1>
                {
                  data.questions[Math.min(curr - 1, data.questions.length - 1)]
                    .description
                }
              </h1>
            )}
          <div className="forms_wrapper">{hasData && getForm()}</div>
        </div>
        <div className="progress_wrapper">
          <div className="progress">{curr < 5 && <p>Вопрос {curr}/4</p>}</div>
          <div className="progress_opponent_wrapper">
            <p className="opponent_txt">Ваш оппонент: </p>
            <img
              src={friend_avatar}
              className="avatar_battle"
              id="avatar_wt_pad"
              alt=""
            />
            <p>Геля</p>
          </div>
        </div>
      </div>
    );
};
