import React from "react";
import Question from "./Question";

type Props = {
  questions: [
    {
      text: string;
      answers: {
        text: string;
      };
    }
  ];
};

export default function Poll(props: Props) {
  return <input placeholder="Meeting ID" />;
}
