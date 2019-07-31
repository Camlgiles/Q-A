import React from 'react';
import {Link} from 'react-router-dom';

export default ({ currentUser, logoutUser }) => {
   const display = currentUser ? 
   (
      <div class='nav-buttons'>
         <Link className='btn' to='/'>Home</Link>
         <Link className='btn' to='/'>Answer</Link>
         <Link className='btn' to='/'>Spaces</Link>
         <Link className='btn' to='/'>Notifications</Link>  
         <div class='nav-username'>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logoutUser} class='nav-logout'>Log Out</button>
         </div>
      </div>
   )  
      :  
   (
      <div> 
         <Link className='btn' to='/signup'>Sign Up</Link>
         <Link className='btn' to='/login'>Log In</Link>
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

// TODO:
//    Add images next to all nav-bar links
//    Add correct links