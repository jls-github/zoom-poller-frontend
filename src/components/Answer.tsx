import React from "react";
import IAnswer from "../interfaces/Answer";

const Answer = ({ answer }: { answer: IAnswer }) => {
  return (
    <input
      value={answer.text}
      placeholder="Answer"
      onChange={(e) => answer.handleAnswerChange(e, answer.key)}
    />
  );
};

export default Answer;
