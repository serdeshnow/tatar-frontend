import React, { useState } from "react";
import Button from "../Button/Button";
import "./DropdownForm.css";

export default function DropdownForm({
  id = "name",
  labelTitle = "LabelTitle",
}) {
  return (
    <div className="component_wrapper">
      <from className="form_wrapper">
        <label htmlFor={id} className="text_label">
          {labelTitle}
        </label>
        <select id={id} className="text_input_select">
          <option value="grammar">Грамматика</option>
          <option value="vocabulary">Словарь</option>
          <option value="speaking">Говорение</option>
        </select>

        <Button>Отправить</Button>
      </from>
    </div>
  );
}
