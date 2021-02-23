import React, { useState } from "react";
import Question from "./Question";
import IPoll from "../interfaces/Poll";

const Poll = () => {
  const [poll, setPoll] = useState<IPoll>({
    meetingId: "",
    title: "",
    questions: [
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
    ],
  });

  const [key, setKey] = useState(3);

  const handleAnswerChange = (
    e: React.FormEvent<HTMLInputElement>,
    answerKey: string
  ) => {
    const newPoll = {
      ...poll,
      questions: poll.questions.map((question) => {
        return {
          ...question,
          answers: question.answers.map((answer) => {
            if (answer.key === answerKey) {
              return { ...answer, text: e.currentTarget.value };
            }
            return answer;
          }),
        };
      }),
    };
    setPoll(newPoll);
  };

  const handleQuestionChange = (
    e: React.FormEvent<HTMLInputElement>,
    questionKey: string
  ) => {
    const newPoll = {
      ...poll,
      questions: poll.questions.map((question) => {
        if (question.key === questionKey) {
          return { ...question, text: e.currentTarget.value };
        }
        return question;
      }),
    };
    setPoll(newPoll);
  };

  const handleMeetingIdChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newPoll = { ...poll, meetingId: e.currentTarget.value };
    setPoll(newPoll);
  };

  const handlePollTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newPoll = { ...poll, title: e.currentTarget.value };
    setPoll(newPoll);
  };

  return (
    <div>
      <input
        placeholder="Meeting ID"
        value={poll.meetingId}
        onChange={handleMeetingIdChange}
      />
      <input
        placeholder="Poll Title"
        value={poll.title}
        onChange={handlePollTitleChange}
      />
      {poll.questions.map((question) => (
        <Question
          question={question}
          key={question.key}
          handleQuestionChange={handleQuestionChange}
          handleAnswerChange={handleAnswerChange}
        />
      ))}
    </div>
  );
};

export default Poll;
