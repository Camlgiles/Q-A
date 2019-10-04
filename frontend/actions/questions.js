import * as QuestionUtil from '../util/questions';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

const receiveQuestions = (payload) => {
      
   return ({
   questions: payload.questions,
   answers: payload.answers,
   type: RECEIVE_QUESTIONS
}) }

const receiveQuestion = (payload) => ({
   question: payload.question,
   answers: payload.answers,
   type: RECEIVE_QUESTION
})

const removeQuestion = (question) => ({
   questionId: question.id,
   type: REMOVE_QUESTION
})

export const requestQuestions = () => dispatch => (
   QuestionUtil.fetchQuestions().then(payload => dispatch(receiveQuestions(payload)))
)

export const requestQuestion = (id) => dispatch => (
   QuestionUtil.fetchQuestion(id).then(payload => dispatch(receiveQuestion(payload)))
)

export const createQuestion = (question) => dispatch => (
   QuestionUtil.createQuestion(question).then(question => dispatch(receiveQuestion(question)))
)

export const updateQuestion = (question) => dispatch => (
   QuestionUtil.updateQuestion(question).then(question => dispatch(receiveQuestion(question)))
)

export const deleteQuestion = (id) => dispatch => (
   QuestionUtil.deleteQuestion(id).then(question => dispatch(removeQuestion(question)))
)