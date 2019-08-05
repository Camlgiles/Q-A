import {combineReducers} from 'redux';
import sessionErrors from './session_errors_reducer';
import session from './session_reducer';
import entities from './entities';

export default combineReducers({
   sessionErrors: sessionErrors,
   session: session,
   entities: entities
});

