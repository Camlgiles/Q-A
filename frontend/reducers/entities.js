import { combineReducers } from 'redux';

import questionsReducer from './questions_reducer';
import usersReducer from './users_reducer';


export default combineReducers({
   questions: questionsReducer,
   user: usersReducer
});
