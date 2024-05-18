import React from "react";
// import { useState } from "react";
// import Button from "../Button/Button";
import "./DropdownForm.css";

export default function DropdownForm({
  id = "name",
  labelTitle = "LabelTitle",
  children,
  chosen,
  setChosen,
}) {
  const handleChange = (val) => {
    setChosen(val);
  };

  return (
    <div className="component_wrapper">
      <form className="form_wrapper">
        <label htmlFor={id} className="text_label">
          {labelTitle}
        </label>
        <select
          value={chosen}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          id={id}
          className="text_input_select"
        >
          {children}
        </select>
      </form>
    </div>
  );
}
