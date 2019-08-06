import {connect} from 'react-redux';
import { requestQuestions, deleteQuestion, createQuestion } from '../../actions/questions';
import QuestionIndex from './question_index';
import {selectQuestionAuthor} from '../../reducers/selectors';


const mstp = state => {
   // debugger
   return ({
      questions: Object.values(state.entities.questions),
      // author: Object.values(state.entities.user),
      currentUser: state.session.currentUser
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

