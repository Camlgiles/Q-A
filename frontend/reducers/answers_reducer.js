import {
   RECEIVE_ANSWER, 
   RECEIVE_ANSWERS,
   REMOVE_ANSWER
} from '../actions/answers';
import merge from 'lodash/merge';
import { RECEIVE_QUESTIONS, RECEIVE_QUESTION } from '../actions/questions';


const answersReducer = (state={}, action) => {
     
   Object.freeze(state);
   let newState;
   switch (action.type) {
      case RECEIVE_QUESTION:
      case RECEIVE_QUESTIONS:
         return merge({}, state, action.answers);
      case RECEIVE_ANSWER:
         newState = merge({}, state, {[action.answer.id]: action.answer});
         return newState;
      case REMOVE_ANSWER:
         newState = merge({}, state);
         delete newState[action.answerId]
         return newState;
      default: 
         return state;
   }
}

export default answersReducer;