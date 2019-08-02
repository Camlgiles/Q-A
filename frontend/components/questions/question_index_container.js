import {connect} from 'react-redux';
import { requestQuestions, deleteQuestion } from '../../actions/questions';
import QuestionIndex from './question_index';


const mstp = state => {
   // debugger;
   return ({
      questions: Object.values(state.entities.questions)
   })
}

const mdtp = dispatch => {
   return ({
      requestQuestions: () => dispatch(requestQuestions()),
      deleteQuestion: (id) => dispatch(deleteQuestion(id))
   })
}

export default connect(mstp, mdtp)(QuestionIndex);