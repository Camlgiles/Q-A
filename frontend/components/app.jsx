import React from 'react';
import {Route} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';

export default () => (
   <div>
      <AuthRoute path='/signup' component={SignupContainer} />
      {/* <ProtectedRoute path='/questions' component={QuestionIndexContainer} />  */}
   </div>
)

