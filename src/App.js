import { useEffect, useState } from "react";
import "./App.css";

import GameSection from "./components/gameSection/GameSection";
import Header from "./components/header/Header";
import Results from "./components/results/Results";
import Map from "./components/displayMap/Map";
import gameData from "./assets/GameData";
import { shuffleArray, randomNum } from "./components/utilities/Functions";

function App() {
  const [maoriPlaceName, setMaoriPlaceName] = useState({
    name: "",
    hint: "",
    answer: "",
  });
  const [answerOptions, setAnswerOptions] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [userAnswer, setUserAnswer] = useState({ correct: [], incorrect: [] });
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const allData = gameData;

  // use effect used to select four random options for the dropdown
  useEffect(() => {
    // if there is no answer set then return this is for the initial load
    if (maoriPlaceName.answer === "") {
      return;
    }

    // set the correct answer first
    let options = [
      { value: maoriPlaceName.answer, label: maoriPlaceName.answer },
    ];

    // add three more random options for dropdown
    while (options.length < 4) {
      const randNum = randomNum(allData.length);

      options.push({
        value: allData[randNum].meaning,
        label: allData[randNum].meaning,
      });
    }

    // shuffle the array around with shuffle function
    const shuffle = shuffleArray(options);

    // set shuffled array to the answerOptions object
    setAnswerOptions((prev) => {
      return [...shuffle];
    });
  }, [maoriPlaceName.answer, allData]);

  /// generate random name function /////
  const generateName = () => {
    const randNum = randomNum(allData.length);

    setIsCorrectAnswer(false);
    // placeName, hint, meaning
    setMaoriPlaceName({
      name: allData[randNum].placeName,
      hint: allData[randNum].hint,
      answer: allData[randNum].meaning,
    });
  };

  // modal handlers
  const onShowMap = () => {
    setShowMap(true);
  };

  const onHideMap = () => {
    setShowMap(false);
  };

  // answer handlers
  const answerHandler = (status, answer) => {
    if (status === "correct") {
      setUserAnswer((value) => {
        return {
          correct: [
            ...value.correct,
            `${maoriPlaceName.name} - ${answer}, is correct!`,
          ],
          incorrect: [...value.incorrect],
        };
      });
      setIsCorrectAnswer(true);
    } else {
      setUserAnswer((value) => {
        return {
          correct: [...value.correct],
          incorrect: [
            ...value.incorrect,
            `${maoriPlaceName.name} - ${answer}, is incorrect!`,
          ],
        };
      });
    }
  };

  return (
    <div className=" container-fluid">
      {showMap && <Map name={maoriPlaceName.name} onClickHandle={onHideMap} />}

      <Header onGenerateName={generateName} />
      <GameSection
        onShowMap={onShowMap}
        options={answerOptions}
        placeNameData={maoriPlaceName}
        answerHandler={answerHandler}
        isCorrectAnswer={isCorrectAnswer}
      />
      <Results
        correctAnswers={userAnswer.correct}
        incorrectAnswers={userAnswer.incorrect}
      />
    </div>
  );
}

export default App;
