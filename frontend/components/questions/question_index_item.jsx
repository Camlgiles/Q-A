import React from 'react';
import { Link } from 'react-router-dom';



const QuestionIndexItem = ({ question, author, deleteQuestion }) => {
   return (
         <li className="questions-index">
            <Link className='questions-index-links' to={`/questions/${question.id}`}>{question.body}</Link>
            {/* <p>{author}</p> */}
            {/* <Link className='questions-index-links' to={`/questions/${question.id}/edit`}>Edit</Link> */}
            {/* <button onClick={deleteQuestion(question.id)}>Delete</button> */}
         </li>
)};

export default QuestionIndexItem;