import React from 'react';
import {
   Route,
   BrowserRouter,
   Redirect,
   Switch,
   Link,
   HashRouter
} from 'react-router-dom'; 
import NavBarContainer from './nav_bar/nav_bar_container';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';
import sessionForm from './session/sessionForm';
import QuestionIndexContainer from './questions/question_index_container';
import QuestionShowContainer from './questions/question_show_container';

export default () => {
   // debugger
   return(
   <div>
      <div className='initial-div'>
         <ProtectedRoute path='/home' component={NavBarContainer} />
         <ProtectedRoute path='/home' component={QuestionIndexContainer} /> 
         <ProtectedRoute path='/questions' component={NavBarContainer} />
         <ProtectedRoute exact path='/questions/:questionId' component={QuestionShowContainer} />
      </div>
      <Switch>
         <AuthRoute exact path='/' component={sessionForm} />
      </Switch>
   </div>
)
   }


