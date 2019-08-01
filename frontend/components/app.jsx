import React from 'react';
import {
   Route,
   Redirect,
   Switch,
   Link,
   HashRouter
} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';
import sessionForm from './session/sessionForm';

export default () => (
   <div>
      <ProtectedRoute path='/' component={NavBarContainer} />
      <AuthRoute exact path='/' component={sessionForm} />
      {/* <AuthRoute exact path='/signin' component={SignupContainer} />
      <AuthRoute exact path='/signin' component={LoginContainer} /> */}
      {/* <ProtectedRoute path='/questions' component={QuestionIndexContainer} />  */}
   </div>
)

