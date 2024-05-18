import "./TextForm.css";
import React from "react";
import { useState } from "react";

export default function TextForm({
  id = "name",
  labelTitle = "LabelTitle",
  type = "text",
}) {
  const [textForm, setTextForm] = useState("");
  const [hasError, setHasError] = useState(false);
  function handleTextFormChange(event) {
    setTextForm(event.target.value);
    setHasError(event.target.value.trim().length === 0);
    console.log(textForm);
  }

  return (
    <form className="form_wrapper">
      <label htmlFor={id} className="text_label">
        {labelTitle}
      </label>
      <input
        type={type}
        id={id}
        className="text_input"
        value={textForm}
        style={{
          border: hasError ? "2px solid red" : null,
        }}
        onChange={handleTextFormChange}
      />
    </form>
  );
}
