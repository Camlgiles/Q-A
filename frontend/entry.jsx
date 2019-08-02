import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
   const root = document.getElementById('root');
   let preloadedState = undefined;
   if (window.currentUser) {
      // debugger
      // document.getElementsByClassName('background')[0].classList.remove('background');
      preloadedState = {
         session: {
            currentUser: window.currentUser
         }
      }
   }
   const store = createStore(preloadedState);
   ReactDOM.render(<Root store={store}/>, root);
});
