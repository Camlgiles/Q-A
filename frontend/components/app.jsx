import React from 'react';
import {
   Route,
   Redirect,
   Switch,
   Link,
   HashRouter
} from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';
import sessionForm from './session/sessionForm';
import QuestionIndexContainer from './questions/question_index_container';

export default () => (
   <div id='background'>
      {/* <Switch> */}
      <AuthRoute exact path='/' component={sessionForm} />
      <ProtectedRoute path='/' component={NavBarContainer} />
      <ProtectedRoute path='/' component={QuestionIndexContainer} /> 
      {/* </Switch> */}
   </div>
)

