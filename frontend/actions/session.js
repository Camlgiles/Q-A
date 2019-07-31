import * as SessionUtil from '../util/session';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


const receiveCurrentuser = (user) => ({
   type: RECEIVE_CURRENT_USER,
   user: user
})

const logoutCurrentUser = () => ({
   type: LOGOUT_CURRENT_USER
})

export const createNewUser = (formUser) => dispatch => (
   SessionUtil.signup(formUser).then(user => dispatch(receiveCurrentuser(user)))
)

export const loginUser = (formUser) => dispatch => (
   SessionUtil.login(formUser).then(user => dispatch(receiveCurrentuser(user)))
)

export const logoutUser = () => dispatch => (
   SessionUtil.logout().then(() => dispatch(logoutCurrentUser()))
)

