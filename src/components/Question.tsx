import React from "react";
import Answer from "./Answer";
import IQuestion from "../interfaces/Question";

export default function Question({
  question,
  handleQuestionChange,
  handleAnswerChange,
}: {
  question: IQuestion;
  handleQuestionChange: Function;
  handleAnswerChange: Function;
}) {
  return (
    <div>
      <input
        placeholder="Question"
        value={question.text}
        onChange={(e) => handleQuestionChange(e, question.key)}
      />
      {question.answers.map((answer) => (
        <Answer
          answer={answer}
          key={answer.key}
          handleAnswerChange={handleAnswerChange}
        />
      ))}
    </div>
  );
}
