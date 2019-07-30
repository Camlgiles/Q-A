import React from 'react';
import {Link} from 'react-router-dom';

export default ({ currentUser, logoutUser }) => {
   const display = currentUser ? 
   (
      <div>
         <p>Hello, {currentUser.username}</p>
         <button onClick={logoutUser}>Log Out</button>
      </div>
   )  
      :  
   (
      <div>
         <Link className='btn'>Sign Up</Link>
         <Link className='btn'>Log In</Link>
      </div>
   );

   
   return (
      <header className='nav-bar'>
         <h1 className='logo'>Q&amp;A</h1>
         <div>
            {display}
         </div>
      </header>
   );
}