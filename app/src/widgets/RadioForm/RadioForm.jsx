import "./RadioForm.css";
import React from "react";
import { useState, useEffect } from "react";

export default function RadioForm({
  q1 = "q1",
  id1 = 1,
  q2 = "q2",
  id2 = 2,
  q3 = "q3",
  id3 = 3,
  setChecked,
  idcorrect = 1,
  curr,
  setCurr,
  res,
  setRes,
}) {
  const handleSubmit = () => {
    var oldRes = res;
    if (option) {
      // oldRes[curr] = option;
      oldRes[curr] = option == idcorrect;
      setRes({ ...oldRes });
      setCurr(curr + 1);
      setIsChecked(false);
    }
  };

  const handleCheck = () => {
    if (option == idcorrect) {
      console.log("pravilno");
    } else console.log("net");
    setIsChecked(true);
  };

  const [option, setOption] = useState(null);

  const handleRadio = (val) => {
    setOption(val);
  };

  const [isChecked, setIsChecked] = useState(null);

  return (
    <div className="form_wrapper_radio">
      <div className="questions_wrapper">
        <div
          style={{
            backgroundColor:
              isChecked && id1 == idcorrect
                ? "#C1CB68"
                : isChecked && id1 !== idcorrect && id1 == option
                ? "#E69281"
                : "",
          }}
          className="question_wrapper"
        >
          <input
            type="radio"
            id={id1}
            name="123"
            value={option}
            onChange={(e) => handleRadio(id1)}
          />
          <label for="contactChoice1">{q1}</label>
        </div>
        <div
          style={{
            backgroundColor:
              isChecked && id2 == idcorrect
                ? "#C1CB68"
                : isChecked && id2 !== idcorrect && id2 == option
                ? "#E69281"
                : "",
          }}
          className="question_wrapper"
        >
          <input
            type="radio"
            id={id2}
            name="123"
            value={option}
            onChange={(e) => handleRadio(id2)}
          />
          <label for="contactChoice1">{q2}</label>
        </div>
        <div
          style={{
            backgroundColor:
              isChecked && id3 == idcorrect
                ? "#C1CB68"
                : isChecked && id3 !== idcorrect && id3 == option
                ? "#E69281"
                : "",
          }}
          className="question_wrapper"
        >
          <input
            type="radio"
            id={id3}
            name="123"
            value={option}
            onChange={(e) => handleRadio(id3)}
          />
          <label for="contactChoice1">{q3}</label>
        </div>
      </div>

      <button
        className="start_btn"
        onClick={() => (isChecked ? handleSubmit() : handleCheck())}
      >
        {isChecked ? "Продолжить" : "Проверить"}
      </button>
    </div>
  );
}
