import React, { useState } from "react";
import Question from "./Question";
import IQuestion from "../interfaces/Question";

export default function Poll() {
  const [questions, setQuestions] = useState([
    {
      text: "",
      answers: [
        {
          text: "",
        },
        {
          text: "",
        },
      ],
    },
  ]);

  return (
    <div>
      <input placeholder="Meeting ID" />
      {questions.map((question) => {
        return Question(question);
      })}
    </div>
  );
}
