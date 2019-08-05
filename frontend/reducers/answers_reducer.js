import {
   RECEIVE_ANSWER, 
   RECEIVE_ANSWERS,
   REMOVE_ANSWER
} from '../actions/answers';
import merge from 'lodash/merge';


const answersReducer = (state={}, action) => {
   Object.freeze(state);
   let newState;
   switch (action.type) {
      case RECEIVE_ANSWERS:
         return action.answers;
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