import * as SessionUtil from '../util/session';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentuser = (currentUser) => ({
   type: RECEIVE_CURRENT_USER,
   currentUser: currentUser
})

const logoutCurrentUser = () => ({
   type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
   type: RECEIVE_SESSION_ERRORS,
   errors
})

export const createNewUser = (formUser) => dispatch => (
   SessionUtil.signup(formUser).then(user => dispatch(receiveCurrentuser(user)), 
      err => (dispatch(receiveErrors(err.responseJSON))
   ))
)

export const loginUser = (formUser) =>  {
   return dispatch => {
      return SessionUtil.login(formUser).then(
         user => dispatch(receiveCurrentuser(user)), 
         err => {
            dispatch(receiveErrors(err.responseJSON))}
      )
   }
}

// export const loginUser = (formUser) => dispatch => (
//    SessionUtil.login(formUser).then(user => dispatch(receiveCurrentuser(user)),
//       err => (dispatch(receiveErrors(err.responseJSON))
//    ))
// )

export const logoutUser = () => dispatch => (
   SessionUtil.logout().then(() => dispatch(logoutCurrentUser()))
)

