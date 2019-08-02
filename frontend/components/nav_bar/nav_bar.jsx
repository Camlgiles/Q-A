import React from 'react';
import {Link} from 'react-router-dom';

export default ({ currentUser, logoutUser }) => {
   const display = currentUser ? 
   (
      <div className='nav-buttons'>
         <Link className='btn' to='/'><i className="fas fa-newspaper"></i> Home</Link>
         <Link className='btn' to='/'><i className="far fa-edit"></i> Answer</Link>
         <Link className='btn' to='/'><i className="fas fa-users"></i> Spaces</Link>
         <Link className='btn' to='/'><i className="far fa-bell"></i> Notifications</Link>  
         {/* <div className='nav-user'> */}
            <p className='nav-profile'>{currentUser.username}</p> 
            <button onClick={logoutUser} className='nav-logout'>Log Out</button>
         {/* </div> */}
      </div>
   )  
      :  
   (
      <div className='nav-bar-logged-out'> 
         <Link className='btn' to='/'>Sign Up</Link>
         <Link className='btn' to='/'>Log In</Link>
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
//    Add link to profile page on 'hello, username'
//    Add correct links