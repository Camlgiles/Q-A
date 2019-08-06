import React from 'react';
import QuestionIndexItem from './question_index_item';
import { Link } from 'react-router-dom';


class QuestionIndex extends React.Component {

   componentDidMount() {
      this.props.requestQuestions();
   }

   render() {
      let questions = this.props.questions.map(question => (
         <QuestionIndexItem 
            key={question.body}
            question={question}
            deleteQuestion={this.props.deleteQuestion}
         />
      ))
      // debugger
      return (
         <div>
               <div className="ask-question">
                  <form>
                     <Link className="ask-question-username" to="/">{this.props.currentUser.username}</Link>
                     <br/>
                     <input className="ask-question-input" type="text" placeholder="Ask a question"/>
                     <input type="submit"/>
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