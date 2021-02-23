import React from "react";
import Answer from "./Answer";
import IQuestion from "../interfaces/Question";

export default function Question(question: IQuestion) {
  return (
    <div>
      <input placeholder="Question" value={question.text} />
      {question.answers.map((answer) => Answer(answer))}
    </div>
  );
}
