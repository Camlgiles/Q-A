import React from 'react';
import { QuestionIndexItem } from "../questions/question_index_item";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
      
    // console.log(this.props);
    this.state = {
      body: "",
      author: this.props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.author = this.author.bind(this);
  }

  componentDidMount() {
    this.props.requestQuestions();
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    document.getElementById("ask-question-form").onkeypress = function(e) {
      var key = e.charCode || e.keyCode || 0;
      if (key == 13) {
        e.preventDefault();
      }
    };
    document.getElementById("elementId").value = "";
    this.props.createQuestion(this.state);
  }

  render() {
    // console.log(this.props);
      
    let answers = this.props.answers;

    let questions = this.props.questions.map((question, i) => {
        
      return (
        <QuestionIndexItem
          key={`${question.id}`}
          question={question}
          answersObj={answers}
          date={question.created_at}
        />
      );
    });
      
    let authorIdNum = this.state.author
    let usersQuestions = questions.map((question, i) => {
        

      if (question.props.question.author_id === authorIdNum) {
        return (
          question
        )
      }
      
      return;
    })

    return (
      <div>
        <div className="ask-question">
          <form id="ask-question-form">
            <Link className="ask-question-username" to="/">
              {this.props.currentUser.username}
            </Link>
            <br />
            <input
              onChange={this.handleInput("body")}
              className="ask-question-input"
              type="text"
              placeholder="Ask a question"
              id="elementId"
            />
            <button onClick={this.handleSubmit} className="ask-question-btn">
              Post Question
            </button>
          </form>
        </div>
        <h1 className="header-title">My Questions</h1>
        <ul className="question-index-ul">{usersQuestions}</ul>
      </div>
    );
  }
}

export default Profile;