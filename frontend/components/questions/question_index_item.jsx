import React from 'react';
import { Link } from 'react-router-dom';

// createTextbox = () => {
//    debugger
// }

export const QuestionIndexItem = ({ question, answersObj, date  }) => {
  //  debugger
   let answers;
   if (answersObj && question.answerIds.length > 0) {
      answers = answersObj.map(answer => {
         if (answer.question_id === question.id) {
          //  debugger
           let dateStamp = new Date(answer.created_at);
           const monthNames = ["January", "February", "March", "April", "May", "June",
             "July", "August", "September", "October", "November", "December"
           ];
           let formattedDate = `${monthNames[dateStamp.getMonth()]} ${dateStamp.getDate()}, ${dateStamp.getFullYear()}`;
            return (
               <div 
                  className='answer'
                  key={answer.id}
               >
               <div className='answer-body'>{answer.body}</div>
               <div className='answer-author'>{answer.author}</div>
               <div className='answer-date'>{formattedDate}</div>
               </div>
            )
         }
      })
   }
  if (question.answerIds.length === 0) {
    answers =
      <p
        className='answer answer-body'
      >
        Be the first to answer!
          </p>
  }

  let dateStamp = new Date(date);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
   let formattedDate = `${monthNames[dateStamp.getMonth()]} ${dateStamp.getDate()}, ${dateStamp.getFullYear()}`;

   return (
         <li className="questions-index">
           <div>
            <Link className='questions-index-links question-date' to={`/questions/${question.id}`}>{question.body}</Link>
            <p className='question-date'>{}</p>
           </div>

            <h2 className="questions-index-author">{question.author}</h2>
            <div className='questions-index-border'>{formattedDate}</div>
            <br/>
            {answers}
            <br/>
            <Link className='create-answer-link' to={`/questions/${question.id}`}>Answer this question</Link>
         </li>
)};