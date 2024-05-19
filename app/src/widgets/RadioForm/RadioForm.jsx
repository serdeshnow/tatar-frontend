import "./RadioForm.css";
import React from "react";
import { useState } from "react";

export default function RadioForm({ radioQuestion, id }) {
  const [checked, setChecked] = useState(true);

  function chengeCheckbox() {
    setChecked(!checked);
  }

  return (
    <div className="form_wrapper_radio">
      <div className="question_number">{id}</div>
      <label className="text_label" htmlFor={id}>
        {radioQuestion}
      </label>
      <input
        className="text_radio"
        name={id}
        type="checkbox"
        checked={checked}
        onChange={chengeCheckbox}
      />
    </div>
  );
}
