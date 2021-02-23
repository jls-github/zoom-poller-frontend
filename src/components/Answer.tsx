import React from "react";
import IAnswer from "../interfaces/Answer";

const Answer = ({
  answer,
  handleAnswerChange,
}: {
  answer: IAnswer;
  handleAnswerChange: Function;
}) => {
  return (
    <input
      value={answer.text}
      placeholder="Answer"
      onChange={(e) => handleAnswerChange(e, answer.key)}
    />
  );
};

export default Answer;
