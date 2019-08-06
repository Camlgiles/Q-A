import React from 'react';
import LoginContainer from './login_container';
import SignupContainer from './signup_container';
import {connect} from 'react-redux';


const mstp = (state) => {
   // debugger
   return {
      errors: state.sessionErrors
   }
}





const SessionForm = ({errors}) => {
   // debugger

   const err = errors.map((error, i) => (
         <li key={`error-${i}`}>
            {error}
         </li>
   ))

      
   return (
      <div className="sessionForm">
         <br/>
         <h1 className="sessionForm-logo">Q&amp;A</h1>
         <h3 className="sessionForm-desc">A place to share knowledge and better understand the world</h3>
         <ul className='errors-list'>
            {err}
         </ul>
         <SignupContainer />
         <LoginContainer />
      </div>
   )
}


export default connect(mstp, null)(SessionForm);