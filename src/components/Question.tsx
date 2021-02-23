import React from "react";
import Answer from "./Answer";

type Props = {
  text: string;
  answers: [
    {
      text: string;
    }
  ];
};

export default function Question(props: Props) {
  return <input placeholder="Question" />;
}
