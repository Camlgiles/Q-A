import {
   RECEIVE_QUESTION,
   RECEIVE_QUESTIONS,
   REMOVE_QUESTION
} from '../actions/questions';
import merge from 'lodash/merge';


const questionsReducer = (state = {}, action) => {
     
   Object.freeze(state);
   let newState;
   switch (action.type) {
      case RECEIVE_QUESTIONS:
         newState = merge({}, state, action.questions);
         return newState;
      case RECEIVE_QUESTION:
         newState = merge({}, state, {[action.question.id]: action.question});
         return newState;
      case REMOVE_QUESTION:
         newState = merge({}, state);
         delete newState[action.questionId]
         return newState;
      default:
         return state;
   }
}

export default questionsReducer;