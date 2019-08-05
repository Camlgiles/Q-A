import { combineReducers } from 'redux';

import questionsReducer from './questions_reducer';
import usersReducer from './users_reducer';
import answersReducer from './answers_reducer';


export default combineReducers({
   answers: answersReducer,
   questions: questionsReducer,
   user: usersReducer
});
