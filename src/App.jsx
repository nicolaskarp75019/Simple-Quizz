import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [answersVisible, setAnswersVisible] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const correctAnswer = "Paris";

  const handleShowAnswers = () => {
    setAnswersVisible(true);
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="container">
      <h1>Quizz Simple</h1>
      <div className="question">
        <button onClick={handleShowAnswers}>
          Quelle est la capitale de la France?
        </button>
      </div>

      {answersVisible && (
        <div className="answer">
          <button onClick={() => handleAnswerClick("Londres")}>Londres</button>
          <button onClick={() => handleAnswerClick("Paris")}>Paris</button>
          <button onClick={() => handleAnswerClick("Berlin")}>Berlin</button>
        </div>
      )}

      {selectedAnswer && (
        <div className={`result ${isCorrect ? "correct" : "incorrect"}`}>
          {isCorrect ? "Bonne réponse !" : "Mauvaise réponse"}
        </div>
      )}
    </div>
  );
};

export default App;
