import {connect} from 'react-redux';
import { requestQuestions, deleteQuestion } from '../../actions/questions';
import QuestionIndex from './question_index';
import {selectQuestionAuthor} from '../../reducers/selectors';


const mstp = state => {
   return ({
      questions: Object.values(state.entities.questions),
      author: Object.values(state.entities.user)
   })
}

const mdtp = dispatch => {
   return ({
      requestQuestions: () => dispatch(requestQuestions()),
      deleteQuestion: (id) => dispatch(deleteQuestion(id))
   })
}

export default connect(mstp, mdtp)(QuestionIndex);

