import React from 'react';
import { Link } from 'react-router-dom';



const QuestionIndexItem = ({ question, deleteQuestion }) => {
   return (
         <li className="questions-index">
            <Link className='questions-index-links' to={`/questions/${question.id}`}>{question.body}</Link>
            <h2 className="question-index-author">{question.author}</h2>
            {/* <Link className='questions-index-links' to={`/questions/${question.id}/edit`}>Edit</Link> */}
            {/* <button onClick={deleteQuestion(question.id)}>Delete</button> */}
         </li>
)};

export default QuestionIndexItem;