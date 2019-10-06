import React from 'react';
import {withRouter} from 'react-router-dom';

class Signup extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         username: '',
         email: '',
         password: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentDidMount() {
      document.body.classList.add('background');
   }

   componentWillUnmount() {
      document.body.classList.remove('background')
   }

   handleInput(type) {
      return (e) => {
         this.setState({[type]: e.target.value})
      }
   }

   handleSubmit(e) {
      e.preventDefault();
      this.props.createNewUser(this.state)
         .then(() => this.props.history.push('/home'))
   }


   render () {
      return (
         <div className="session-form">
            <div className="signup-form">
               <p className="sessionForm-text">Sign Up</p>
               <form className="signup-form-border">
                  <label> 
                     <input 
                        type="text" 
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                        placeholder='Username'
                     />
                  </label>
                  <br/>
                  <label>
                     <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        placeholder='Email'
                     />
                  </label>
                  <br/>
                  <label>
                     <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        placeholder='Password'
                     />
                  </label>
                     <button onClick={this.handleSubmit} className="sessionForm-btn">Sign Up</button>
               </form>
            </div>
         </div>
      )
   }
};

export default withRouter(Signup);