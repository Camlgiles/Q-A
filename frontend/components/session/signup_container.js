import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session';
import Signup from './signup';


const mstp = (state) => {
   // debugger
   return {
      errors: state.sessionErrors
   }
}

const mdtp = dispatch => ({
   createNewUser: formUser => dispatch(createNewUser(formUser))
})

export default connect(mstp, mdtp)(Signup);


