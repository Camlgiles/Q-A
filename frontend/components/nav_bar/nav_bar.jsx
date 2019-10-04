import React from 'react';
import {Link} from 'react-router-dom';

export default ({ currentUser, logoutUser }) => {
   const display = currentUser ? 
   (
      <div className='nav-buttons'>
         <h1 className='logo btn'>Q&amp;A</h1>
          <Link className='btn' to='/home'><i className="fas fa-newspaper"></i> Home</Link>
          <Link className='btn' to='/home'><i className="far fa-edit"></i> Answer</Link>
          <Link className='btn' to='/home'><i className="fas fa-users"></i> Spaces</Link>
          <Link className='btn' to='/home'><i className="far fa-bell"></i> Notifications</Link>  
         {/* <div className='nav-user'> */}
          <Link className='nav-profile' to='/user-profile'>{currentUser.username}</Link> 
            <button onClick={logoutUser} className='nav-logout'>Log Out</button>
         {/* </div> */}
      </div>
   )  
      :  
   (
      <div className='nav-bar-logged-out'> 
         <Link className='btn' to='/home'>Sign Up</Link>
         <Link className='btn' to='/home'>Log In</Link>
      </div>
   );

   
   return (
      <header className='nav-bar'>
         <div>
            {display}
         </div>
      </header>
   );
}

// TODO:
//    Add link to profile page on 'hello, username'
//    Add correct links