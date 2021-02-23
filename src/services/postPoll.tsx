import IPoll from "../interfaces/Poll";

type PostablePoll = {
  meeting_id: string;
  questions: {
    text: string;
    answers: string[];
  }[];
};

type Status = {
  success: boolean;
  errors: string[];
};

const blankPostablePoll: PostablePoll = {
  meeting_id: "",
  questions: [
    {
      text: "",
      answers: ["", ""],
    },
  ],
};

class PollApi {
  status: Status;

  constructor() {
    this.status = { success: true, errors: [] };
  }

  private reportFailure(error: string): void {
    this.status = {
      ...this.status,
      success: false,
      errors: [...this.status.errors, error],
    };
  }

  private convertPoll(poll: IPoll): PostablePoll {
    try {
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
    } catch {
      this.reportFailure("Could not convert poll into postable JSON");
      return blankPostablePoll;
    }
  }

  private postPoll(poll: PostablePoll): void {
    fetch(process.env["REACT_APP_BACKEND_URL"] as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(poll),
    }).catch((err) => {
      this.reportFailure("Could not complete post request");
    });
  }

  public submitPoll(poll: IPoll): Status {
    const convertedPoll = this.convertPoll(poll);
    if (this.status.success) {
      this.postPoll(convertedPoll);
    }
    return this.status;
  }
}

export default PollApi;
