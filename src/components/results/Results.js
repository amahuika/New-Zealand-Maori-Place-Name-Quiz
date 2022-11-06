import "./Results.css";
import Card from "../UI/Card";
import { v4 as uuidv4 } from "uuid";
import ResultsList from "./ResultsList";

const Results = (props) => {
  const correctAnswerList = (
    <ul className="">
      {props.correctAnswers.map((value) => {
        return <ResultsList listItem={value} key={uuidv4()} />;
      })}
    </ul>
  );
  const incorrectAnswerList = (
    <ul className="">
      {props.incorrectAnswers.map((value) => {
        return <ResultsList listItem={value} key={uuidv4()} />;
      })}
    </ul>
  );

  return (
    <div className="row justify-content-center">
      <div className="col-6 col-md-5">
        <Card>
          <h4 className="text-success">Correct Answers</h4>
          <hr />
          {correctAnswerList}
        </Card>
      </div>
      <div className="col-6 col-md-5">
        <Card>
          <h4 className="text-danger">Incorrect Answers</h4>
          <hr />

          {incorrectAnswerList}
        </Card>
      </div>
    </div>
  );
};

export default Results;
