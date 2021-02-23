import React from "react";
import IAnswer from "../interfaces/Answer";

const Answer = (answer: IAnswer) => {
  return <input value={answer.text} />;
};

export default Answer;
