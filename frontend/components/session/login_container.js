import { connect } from 'react-redux';
import { loginUser } from '../../actions/session';
import Login from './login';


const mstp = (state) => {
     
   return {
      errors: state.sessionErrors
   }
}

const mdtp = (dispatch) => ({
   login: formUser => dispatch(loginUser(formUser)),
});

export default connect(mstp, mdtp)(Login);