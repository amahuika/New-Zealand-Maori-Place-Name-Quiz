import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <React.Fragment>
      <button
        className={`btn ${props.class}`}
        type={`${props.type} button`}
        onClick={props.onClickHandle}
      >
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default Button;
