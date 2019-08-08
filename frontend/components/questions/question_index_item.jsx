import React from 'react';
import { Link } from 'react-router-dom';



const QuestionIndexItem = ({ question, answersObj  }) => {
   // debugger
   let answers;
   if (answersObj) {
      answers = answersObj.map(answer => {
         if (answer.question_id === question.id) {
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

   return (
         <li className="questions-index">
            <Link className='questions-index-links' to={`/questions/${question.id}`}>{question.body}</Link>
            <h2 className="questions-index-author">{question.author}</h2>
            <div className='questions-index-border'></div>
            <br/>
            {answers}
            <br/>
            <Link className='create-answer-link' to='/home'>Answer this quesiton</Link>
         </li>
)};

export default QuestionIndexItem;