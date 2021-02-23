import IPoll from "../interfaces/Poll";

type PostablePoll = {
  meeting_id: string;
  questions: {
    text: string;
    answers: string[];
  }[];
};

function convertPoll(poll: IPoll): PostablePoll {
  const convertedPoll: PostablePoll = {
    meeting_id: poll.meetingId,
    questions: poll.questions.map((question) => {
      return {
        text: question.text,
        answers: question.answers.map((answer) => {
          return answer.text;
        }),
      };
    }),
  };
  return convertedPoll;
}

function postPoll(poll: PostablePoll) {
  fetch(process.env["REACT_APP_BACKEND_URL"] as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(poll),
  });
}

export default postPoll;
