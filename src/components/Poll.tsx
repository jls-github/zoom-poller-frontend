import React, { useState } from "react";
import Question from "./Question";
import IQuestion from "../interfaces/Question";

const Poll = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([
    {
      text: "",
      key: "question-1",
      answers: [
        {
          key: "answer-1",
          text: "",
        },
        {
          key: "answer-2",
          text: "",
        },
      ],
    },
  ]);

  const [key, setKey] = useState(3);

  const handleAnswerChange = (
    e: React.FormEvent<HTMLInputElement>,
    answerKey: string
  ) => {
    console.log(questions);
    const newQuestions = questions.map((question) => {
      return {
        ...question,
        answers: question.answers.map((answer) => {
          if (answer.key === answerKey) {
            return { ...answer, text: e.currentTarget.value };
          }
          return answer;
        }),
      };
    });
    console.log(newQuestions);
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (
    e: React.FormEvent<HTMLInputElement>,
    questionKey: string
  ) => {
    const newQuestions = questions.map((question) => {
      console.log(question);
      if (question.key === questionKey) {
        return { ...question, text: e.currentTarget.value };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  return (
    <div>
      <input placeholder="Meeting ID" />
      {questions.map((question) => (
        <Question question={question} key={question.key} handleQuestionChange={handleQuestionChange} handleAnswerChange={handleAnswerChange} />
      ))}
    </div>
  );
};

export default Poll;
