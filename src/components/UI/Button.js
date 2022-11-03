import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={`myButton`}
      type={`${props.type} button`}
      onClick={props.onClickHandle}
    >
      {props.displayName}
    </button>
  );
};

export default Button;
