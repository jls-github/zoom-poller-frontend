import IAnswer from './Answer'

export default interface IQuestion {
    text: string;
    answers: IAnswer[]
}