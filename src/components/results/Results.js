import "./Results.css";
import Card from "../UI/Card";
import ResultsList from "./ResultsList";

const Results = (props) => {
  const correctAnswerList = (
    <ul className="">
      {props.correctAnswers.map((value) => {
        return <ResultsList listItem={value.answer} key={value.id} />;
      })}
    </ul>
  );
  const incorrectAnswerList = (
    <ul className="">
      {props.incorrectAnswers.map((value) => {
        return <ResultsList listItem={value.answer} key={value.id} />;
      })}
    </ul>
  );

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-6 col-md-5">
        {props.correctAnswers.length > 0 && (
          <Card>
            <h4 className="text-success">Correct</h4>
            <hr />
            {correctAnswerList}
          </Card>
        )}
      </div>
      <div className="col-6 col-md-5">
        {props.incorrectAnswers.length > 0 && (
          <Card>
            <h4 className="text-danger">Incorrect</h4>
            <hr />
            {incorrectAnswerList}
          </Card>
        )}
      </div>
    </div>
  );
};

export default Results;
