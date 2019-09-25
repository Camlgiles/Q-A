import Profile from "./profile";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/session";

const mstp = state => ({
  questions: Object.values(state.entities.questions).reverse(),
  currentUser: state.session.currentUser,
  answers: Object.values(state.entities.answers)
});

const mdtp = dispatch => ({
  createQuestion: question => dispatch(createQuestion(question)),
  requestQuestions: () => dispatch(requestQuestions()),
  deleteQuestion: id => dispatch(deleteQuestion(id))
});

export default connect(
  mstp,
  mdtp
)(Profile);
