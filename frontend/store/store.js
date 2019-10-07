import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';

const configureStore = (preloadedState = {}) => (
   createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunk) // add ", logger)" for logger middleware
   )
);

export default configureStore;