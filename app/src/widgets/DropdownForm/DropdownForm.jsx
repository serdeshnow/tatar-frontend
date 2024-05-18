import React from "react";
// import { useState } from "react";
// import Button from "../Button/Button";
import "./DropdownForm.css";

export default function DropdownForm({
  id = "name",
  labelTitle = "LabelTitle",
  children,
}) {
  return (
    <div className="component_wrapper">
      <from className="form_wrapper">
        <label htmlFor={id} className="text_label">
          {labelTitle}
        </label>
        <select id={id} className="text_input_select">
          {children}
        </select>
      </from>
    </div>
  );
}
