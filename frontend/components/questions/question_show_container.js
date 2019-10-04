import {connect} from 'react-redux';
import { requestQuestion, createQuestion } from '../../actions/questions';
import { createAnswer, requestAnswers} from '../../actions/answers';
import QuestionShow from './question_show.jsx';


const mstp = (state, ownProps) => {
     
   let question = state.entities.questions[ownProps.match.params.questionId];
   return ({
      question: question,
      answers: Object.values(state.entities.answers),
      currentUser: state.session.currentUser
   })
}

const mdtp = dispatch => {
   return ({
      createQuestion: (question) => dispatch(createQuestion(question)),
      requestQuestion: (id) => dispatch(requestQuestion(id)),
      createAnswer: (answer) => dispatch(createAnswer(answer))
   })
}

export default connect(mstp, mdtp)(QuestionShow);