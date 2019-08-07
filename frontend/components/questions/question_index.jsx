import React from 'react';
import QuestionIndexItem from './question_index_item';
import { Link } from 'react-router-dom';


class QuestionIndex extends React.Component {
   constructor(props) {
      super(props);
      // debugger
      // console.log(this.props);
      this.state = {
         body:"",
         author: this.props.currentUser.id,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentDidMount() {
      this.props.requestQuestions();
   }

   handleInput(type) {
      return (e) => {
         this.setState({ [type]: e.target.value })
      }
   }

   handleSubmit(e) {
      e.preventDefault();
      this.props.createQuestion(this.state);
   }

   render() {
      // console.log(this.props);
      // debugger

      let questions = this.props.questions.map((question, i) => (
         <QuestionIndexItem 
            key={`${question.id}`}
            question={question}
         />
      ))
      // debugger
      return (
         <div>
               <div className="ask-question">
                  <form>
                     <Link className="ask-question-username" to="/">{this.props.currentUser.username}</Link>
                     <br/>
                     <input 
                        onChange={this.handleInput('body')} className="ask-question-input" 
                        type="text" placeholder="Ask a question"
                     />
                     <button 
                        onClick={this.handleSubmit} 
                        className="ask-question-btn">
                        Post Question
                     </button>
                  </form>  
               </div>
            <ul>
               {questions}
            </ul>
         </div>
      );
   }

}


export default QuestionIndex;