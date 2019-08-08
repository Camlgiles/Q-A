import {connect} from 'react-redux';
import { requestQuestions, deleteQuestion, createQuestion } from '../../actions/questions';
import QuestionIndex from './question_index';


const mstp = state => {
   // debugger
   // console.log(state.entities);
   return ({
      // banana: {state},
      questions: Object.values(state.entities.questions),
      currentUser: state.session.currentUser,
      answers: Object.values(state.entities.answers)
   })
}

const mdtp = dispatch => {
   return ({
      createQuestion: (question) => dispatch(createQuestion(question)),
      requestQuestions: () => dispatch(requestQuestions()),
      deleteQuestion: (id) => dispatch(deleteQuestion(id))
   })
}

export default connect(mstp, mdtp)(QuestionIndex);

