import "./Header.css";
import Button from "../UI/Button";

const Header = (props) => {
  const generateHandle = () => {
    props.onGenerateName();
  };

  return (
    <header className="row text-light text-center my-3">
      <h1>New Zealand Maori Place Names</h1>
      <p>
        Translate the Maori place name from the options given
        <br />
        Stuck? click the hint button to get a hint
      </p>
      <Button class="btn-success" onClickHandle={generateHandle}>
        <span className="generateTxt">Generate Place Name</span>
      </Button>
    </header>
  );
};

export default Header;
