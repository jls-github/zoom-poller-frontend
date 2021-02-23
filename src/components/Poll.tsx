import React, { useState } from "react";
import Question from "./Question";
import IQuestion from "../interfaces/Question";
import { setConstantValue } from "typescript";

export default function Poll() {
  const [questions, setQuestions] = useState<IQuestion[]>([
    {
      text: "",
      key: "question-1",
      handleQuestionChange: handleQuestionChange,
      answers: [
        {
          handleAnswerChange: handleAnswerChange,
          key: "answer-1",
          text: "",
        },
        {
          handleAnswerChange: handleAnswerChange,
          key: "answer-2",
          text: "",
        },
      ],
    },
  ]);

  const [key, setKey] = useState(3);

  function handleAnswerChange(
    e: React.FormEvent<HTMLInputElement>,
    key: string
  ) {
    const newQuestions = questions.map((question) => {
      return {
        ...question,
        answers: question.answers.map((answer) => {
          if (answer.key === key) {
            return { ...answer, text: e.currentTarget.value };
          }
          return answer;
        }),
      };
    });
    setQuestions(newQuestions);
  }

  function handleQuestionChange(
    e: React.FormEvent<HTMLInputElement>,
    key: string
  ) {
    const newQuestions = questions.map((question) => {
      if (question.key === key) {
        return { ...question, text: e.currentTarget.value };
      }
      return question;
    });
    setQuestions(newQuestions);
  }

  return (
    <div>
      <input placeholder="Meeting ID" />
      {questions.map((question) => (
        <Question question={question} />
      ))}
    </div>
  );
}
