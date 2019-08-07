import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session';
import { RECEIVE_QUESTION } from '../actions/questions';



const usersReducer = (state = {}, action) => {
   Object.freeze(state);
   switch (action.type) {
      case RECEIVE_CURRENT_USER:
         return merge({}, state, { [action.currentUser.id]: action.currentUser });
      // case RECEIVE_QUESTION:
      //    return merge({}, state, {[action.question.question.id]: action.question.})
      default:
         return state;
   }
};

export default usersReducer;