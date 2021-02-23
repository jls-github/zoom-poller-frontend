import IQuestion from "./Question";

export default interface IPoll {
  meetingId: string;
  questions: IQuestion[];
}
