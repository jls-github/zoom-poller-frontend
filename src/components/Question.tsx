import React from "react";
import Answer from "./Answer";
import IQuestion from "../interfaces/Question";

export default function Question({ question }: { question: IQuestion }) {
  return (
    <div>
      <input
        placeholder="Question"
        value={question.text}
        onChange={(e) => question.handleQuestionChange(e, question.key)}
      />
      {question.answers.map((answer) => (
        <Answer answer={answer} />
      ))}
    </div>
  );
}
