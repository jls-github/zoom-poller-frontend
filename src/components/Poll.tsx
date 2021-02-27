import React, { useState } from "react";
import IPoll from "../interfaces/Poll";
import {
  generateAnswer,
  generateQuestion,
  generatePoll,
} from "../services/Generators";
import Question from "./Question";

const Poll = () => {
  const [poll, setPoll] = useState<IPoll>(generatePoll());

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

  const addAnswer = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    questionKey: string
  ) => {
    e.preventDefault();
    const newPoll = {
      ...poll,
      questions: poll.questions.map((question) => {
        if (question.key === questionKey) {
          return {
            ...question,
            answers: [...question.answers, generateAnswer()],
          };
        }
        return question;
      }),
    };
    setPoll(newPoll);
  };

  const addQuestion = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newPoll = {
      ...poll,
      questions: [...poll.questions, generateQuestion()],
    };
    setPoll(newPoll);
  };

  const deleteAnswer = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    answerKey: string
  ) => {
    e.preventDefault();
    const newPoll = {
      ...poll,
      questions: poll.questions.map((question) => {
        return {
          ...question,
          answers: question.answers.filter(
            (answer) => answer.key !== answerKey
          ),
        };
      }),
    };
    setPoll(newPoll);
  };

  const deleteQuestion = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    questionKey: string
  ) => {
    e.preventDefault();
    const newPoll = {
      ...poll,
      questions: poll.questions.filter(
        (question) => question.key !== questionKey
      ),
    };
    setPoll(newPoll);
  };

  return (
    <form>
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
          addAnswer={addAnswer}
          deleteAnswer={deleteAnswer}
          deleteQuestion={deleteQuestion}
        />
      ))}
      <button onClick={(e) => addQuestion(e)}>Add Question</button>
    </form>
  );
};

export default Poll;
