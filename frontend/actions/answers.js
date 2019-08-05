import * as AnswerUtil from '../util/answers';


export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';


const receiveAnswers = (answers) => ({
   answers: answers,
   type: RECEIVE_ANSWERS
})

const receiveAnswer = (answer) => ({
   answer: answer,
   type: RECEIVE_ANSWER
})

const removeAnswer = (answer) => ({
   answerId: answer.id,
   type: REMOVE_ANSWER
})


export const requestAnswers = () => dispatch => (
   AnswerUtil.fetchAnswers().then(answers => dispatch(receiveAnswers(answers)))
)

export const requestAnswer = (id) => dispatch => (
   AnswerUtil.fetchAnswer(id).then(answer => dispatch(receiveAnswer(answer)))
)

export const createAnswer = (answer) => dispatch => (
   AnswerUtil.createAnswer(answer).then(answer => dispatch(receiveAnswer(answer)))
)

export const updateAnswer = (answer) => dispatch => (
   AnswerUtil.updateAnswer(answer).then(answer => dispatch(receiveAnswer(answer)))
)

export const deleteAnswer = (id) => dispatch => (
   AnswerUtil.deleteAnswer(id).then(answer => dispatch(removeAnswer(answer)))
)