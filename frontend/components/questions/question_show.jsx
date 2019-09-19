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
         author_id: this.props.currentUser.id
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.createTextbox = this.createTextbox.bind(this);
   }

   componentDidMount() {
      this.props.requestQuestion(this.props.match.params.questionId)
   }

   handleSubmit(e) {
      // debugger
      e.preventDefault();
      this.props.createAnswer({
         body: this.state.body,
         author_id: this.state.author_id,
         question_id: this.props.question.id
      });
      document.getElementById('elementId').value = '';
   }



   handleInput(type) {
      return (e) => {
         this.setState({ [type]: e.target.value })
      }
   }

   createTextbox() {
      // debugger
      this.state.showResults ? this.setState({showResults:false}) : this.setState({showResults: true});
      this.state.answerThisQuesiton ? this.setState({answerThisQuesiton: false}) : this.setState({answerThisQuesiton: true});
   }

   render() {
    //  debugger
      if (!this.props.question) {
         return <div></div>
      };
      let answers;
      // debugger
      if (this.props.answers.length === 0) {   
        answers = 
          <p 
            className='answer answer-body'
          >
            Be the first to answer!
          </p>
      }
      if (this.props.answers.length > 0) {
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
     let dateStamp = new Date(this.props.question.created_at);
     const monthNames = ["January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
     ];
     let formattedDate = `${monthNames[dateStamp.getMonth()]} ${dateStamp.getDate()}, ${dateStamp.getFullYear()}`;








      // debugger
      return (
         <ul className="question-index-ul">
            <li className="questions-index">
               <h1 className="questions-index-links">{this.props.question.body}</h1>
               <h2 className="questions-index-author">{this.props.question.author}</h2>
               <p>{formattedDate}</p>
               <div className='questions-index-border'></div>
               <br />
               {answers}
               <br />
               { this.state.showResults ? 
                  <form>
                     <textarea 
                        onChange={this.handleInput('body')} 
                        type="text" 
                        className='answer-input' 
                        id='elementId'
                        placeholder='Answer goes here..'
                     />
                     <br/>
                     <button onClick={this.handleSubmit}>Submit Answer</button>
                  </form> 
                  : '' 
               }
               <button onClick={this.createTextbox} className='create-answer-link'>{this.state.answerThisQuesiton ? 'Answer this question' : 'Cancel'}</button>
            </li>
         </ul>
      )
   }
}

export default QuestionShow;