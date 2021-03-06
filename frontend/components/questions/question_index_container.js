import {connect} from 'react-redux';
import { requestQuestions, deleteQuestion, createQuestion } from '../../actions/questions';
import QuestionIndex from './question_index';


const mstp = state => {
  //    
   return ({
      questions: Object.values(state.entities.questions).reverse(),
      currentUser: state.session.currentUser,
      answers: Object.values(state.entities.answers)
   })
}

const mdtp = dispatch => {
   return {
     createQuestion: question => dispatch(createQuestion(question)),
     requestQuestions: () => dispatch(requestQuestions()),
     deleteQuestion: id => dispatch(deleteQuestion(id)),
     createAnswer: answer => dispatch(createAnswer(answer))
   };
}

export default connect(mstp, mdtp)(QuestionIndex);

