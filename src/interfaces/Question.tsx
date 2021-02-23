import IAnswer from './Answer'

export default interface IQuestion {
    text: string;
    key: string;
    answers: IAnswer[]
    handleQuestionChange: Function;
}