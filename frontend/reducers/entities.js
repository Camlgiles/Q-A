import { combineReducers } from 'redux';

import questionsReducer from './questions_reducer';


export default combineReducers({
   questions: questionsReducer,
   user: userReducer
});
