import React from 'react';

class Login extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         username: "",
         password: "",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.demoLogin = this.demoLogin.bind(this);
   }

   handleInput(type) {
      return (e) => {
         this.setState({ [type]: e.target.value });
      }
   }

   handleSubmit(e) {
      e.preventDefault();
      this.props.login(this.state);
         // .then(() => this.props.history.push('/'));
   }

   demoLogin(e) {
      e.preventDefault();
      this.props.login({username: '123456', password: '123456'});
         // .then(() => this.props.history.push('/'));
   }

   render() {
      return (
         <div  className="session-form">
            <div className="login-form">
               <form>
                  <label>
               <p className="sessionForm-text">Login</p>
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
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')} 
                        placeholder='Password'
                     />
                  </label>
                  <button onClick={this.handleSubmit} className="sessionForm-btn">Login</button>
               </form>
               <button onClick={this.demoLogin} className="sessionForm-btn">Demo Login</button>
            </div>
         </div>
      )
   }
}

export default Login;