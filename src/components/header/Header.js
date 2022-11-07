import "./Header.css";
import Button from "../UI/Button";

const Header = (props) => {
  const generateHandle = () => {
    props.onGenerateName();
  };

  return (
    <header className="row text-light text-center py-3 justify-content-center">
      <div className="col-12 col-md-8">
        <h1>New Zealand Maori Place Names</h1>
        <p>
          Generate a random Maori place name, select the correct translation
          from the options given and view the location on the map by clicking
          the button under the place name.
          <br />
          Stuck? click the hint button.
        </p>
        <p className="mb-2">
          Click the button to generate a random Maori place name
        </p>
        <Button class="btn-success" onClickHandle={generateHandle}>
          <span className="generateTxt">Generate Place Name</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
