import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import App from './components/app';


document.addEventListener('DOMContentLoaded', () => {
   const root = document.getElementById('root');
   let preloadedState = undefined;
   if (window.currentUser) {
      preloadedState = {
         session: {
            currentUser: window.currentUser
         }
      }
   }
   const store = createStore(preloadedState);
   ReactDOM.render(<h1>Welcome to Q&amp;A</h1>, root);
});
