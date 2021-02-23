type PostablePoll = {
  meeting_id: string;
  questions: [
    {
      text: string;
      answers: [
        {
          text: string;
        }
      ];
    }
  ];
};

const postPoll = (poll: PostablePoll) => {
  fetch(process.env["REACT_APP_BACKEND_URL"] as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(poll),
  });
};

export default postPoll;
