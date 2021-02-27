import React from "react";
import Answer from "./Answer";
import IQuestion from "../interfaces/Question";

export default function Question({
  question,
  handleQuestionChange,
  handleAnswerChange,
  addAnswer,
  deleteAnswer,
  deleteQuestion,
}: {
  question: IQuestion;
  handleQuestionChange: Function;
  handleAnswerChange: Function;
  addAnswer: Function;
  deleteAnswer: Function;
  deleteQuestion: Function;
}) {
  return (
    <>
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
          deleteAnswer={deleteAnswer}
        />
      ))}
      <button onClick={(e) => addAnswer(e, question.key)}>Add Answer</button>
      <button onClick={(e) => deleteQuestion(e, question.key)}>
        Delete Question
      </button>
    </>
  );
}
