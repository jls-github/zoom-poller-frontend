import IQuestion from "./Question";

export default interface IPoll {
  meetingId: string;
  title: string;
  questions: IQuestion[];
}
