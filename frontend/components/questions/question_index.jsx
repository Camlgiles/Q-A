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
      return (
         <div>
               <div className="ask-question">
                  <Link className="ask-question-username" to="/">{currentUser.username}</Link>
                  <br/>
                  <Link className="ask-question-info" to='/'>Ask a question</Link>
               </div>
            <ul>
               {questions}
            </ul>
         </div>
      );
   }

}


export default QuestionIndex;