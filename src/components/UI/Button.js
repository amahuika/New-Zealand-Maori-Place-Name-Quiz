import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button
        className={`btn ${props.class}`}
        type={`${props.type} button`}
        onClick={props.onClickHandle}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
