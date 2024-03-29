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
      <div className="col-6 col-md-5 col-xl-4">
        {props.correctAnswers.length > 0 && (
          <Card class="p-2">
            <h4 className="text-success fw-bold">Correct</h4>
            <hr className="mb-2" />
            {correctAnswerList}
          </Card>
        )}
      </div>
      <div className="col-6 col-md-5 col-xl-4">
        {props.incorrectAnswers.length > 0 && (
          <Card class="p-2">
            <h4 className="text-danger fw-bold">Incorrect</h4>
            <hr className="mb-2" />
            {incorrectAnswerList}
          </Card>
        )}
      </div>
    </div>
  );
};

export default Results;
