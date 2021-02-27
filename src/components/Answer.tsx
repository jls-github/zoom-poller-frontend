import React from "react";
import IAnswer from "../interfaces/Answer";

const Answer = ({
  answer,
  handleAnswerChange,
  deleteAnswer,
}: {
  answer: IAnswer;
  handleAnswerChange: Function;
  deleteAnswer: Function;
}) => {
  return (
    <>
      <input
        value={answer.text}
        placeholder="Answer"
        onChange={(e) => handleAnswerChange(e, answer.key)}
      />
      <button onClick={(e) => deleteAnswer(e, answer.key)}>
        Delete Answer
      </button>
    </>
  );
};

export default Answer;
