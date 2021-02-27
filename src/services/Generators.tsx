import { v4 as uuid } from "uuid";
import IAnswer from "../interfaces/Answer";
import IQuestion from "../interfaces/Question";
import IPoll from "../interfaces/Poll";

export function generateAnswer(): IAnswer {
  return {
    key: uuid(),
    text: "",
  };
}

export function generateQuestion(): IQuestion {
  return {
    text: "",
    key: uuid(),
    answers: [generateAnswer(), generateAnswer()],
  };
}

export function generatePoll(): IPoll {
  return {
    meetingId: "",
    title: "",
    questions: [generateQuestion()],
  };
}
