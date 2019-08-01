import React from 'react';
import LoginContainer from './login_container';
import SignupContainer from './signup_container';

export default () => {
   return (
      <div className="sessionForm">
         <br/>
         <h1 className="sessionForm-logo">Q&amp;A</h1>
         <h3 className="sessionForm-desc">A place to share knowledge and better understand the world</h3>
         <SignupContainer />
         <LoginContainer />
      </div>
   )
}