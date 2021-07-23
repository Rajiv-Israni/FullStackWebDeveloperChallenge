import React from "react";

import "./Input.css";



const Input = (props) => {
  const element =
  props.element === 'input' ? (
    <input
      id={props.id}
      type={props.type}
      onChange={props.onChange}
    />
  ) : (
    <textarea
      id={props.id}
    />
  );

  return (
    <div
      className={`form-control`}
    >
      <label>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
