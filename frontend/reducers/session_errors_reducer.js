import {
   RECEIVE_SESSION_ERRORS,
   RECEIVE_CURRENT_USER,
} from '../actions/session';

export default (state = [], action) => {
   Object.freeze(state);
   switch (action.type) {
      case RECEIVE_SESSION_ERRORS:
         return {errors: action.errors};
      default:
         return state;
   }
};