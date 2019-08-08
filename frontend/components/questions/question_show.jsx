import React from 'react';
import { Link } from 'react-router-dom';
// import QuestionShowResponse from './question_show_response';

class QuestionShow extends React.Component {
   constructor(props) {
      super(props);
      // debugger
      this.state = { 
         showResults: false,
         answerThisQuesiton: true, 
         body:"", 
         author_id: this.props.currentUser.id, 
         question_id: this.props.questionId
      };
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleSubmit(e) {
      // debugger
      e.preventDefault();
      // this.props.createAnswer(this.state);
      this.props.createAnswer({
         body: this.state.body,
         author_id: this.state.author_id,
         question_id: this.state.question_id
      });
   }



   handleInput(type) {
      return (e) => {
         this.setState({ [type]: e.target.value })
      }
   }

   createTextbox() {
      this.state.showResults ? this.setState.showResults = false : this.setState.showResults = true;
      this.state.answerThisQuesiton ? this.setState.answerThisQuesiton = false : this.setState.answerThisQuesiton = true;
   }

   render() {
      if (!this.props.question) {
         return <div></div>
      };
      let answers;
      if (this.props.answers) {
         answers = this.props.answers.map(answer => {
            if (answer.question_id === this.props.question.id) {
               return (
                  <div
                     className='answer'
                     key={answer.id}
                  >
                     <div className='answer-body'>{answer.body}</div>
                     <div className='answer-author'>{answer.author}</div>
                  </div>
               )
            }
         })
      }
      // debugger
      return (
         <ul>
            <li className="questions-index">
               <h1 className="questions-index-links">{this.props.question.body}</h1>
               <h2 className="questions-index-author">{this.props.question.author}</h2>
               <div className='questions-index-border'></div>
               <br />
               {answers}
               <br />
               { this.setState.showResults ? 
                  <form>
                     <textarea onChange={this.handleInput('body')} type="text" className='answer-input' placeholder='Answer goes here..'/>
                     <br/>
                     <button onClick={this.handleSubmit}>Submit Answer</button>
                  </form> 
                  : '' 
               }
               <Link onClick={this.createTextbox()} className='create-answer-link'>{this.state.answerThisQuesiton ? 'Answer this question' : 'Cancel'}</Link>
            </li>
         </ul>
      )
   }
}

export default QuestionShow;