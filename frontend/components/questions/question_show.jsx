import React from 'react';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component {
   constructor(props) {
      super(props);
      // debugger


   }

   // componentDidMount() {
   //    this.props.requestQuestion(this.props.match.params.questionId);
   // }

   render() {
      if (!this.props.question) {
         return <div></div>
      };
      return (
         <ul>
            <li className="question-index">
               <h1 className="question-index-author">{this.props.question.body}</h1>
               <h2>{this.props.question.author}</h2>
               <div className='questin-index-border'></div>
               <br />
               {/* {answers} */}
               <br />
               <Link className='create-answer-link' to='/home'>Add a Response</Link>
            </li>
         </ul>
      )
   }
}

export default QuestionShow;