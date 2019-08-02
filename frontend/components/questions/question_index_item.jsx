import React from 'react';
import { Link } from 'react-router-dom';



const QuestionIndexItem = ({ question, deleteQuestion }) => (
   <li className="questions-index">
      <p className='first-question'>{question.body}</p>
      {/* <Link className='questions-index-links' to={`/questions/${question.id}`}>{question.body}</Link> */}
      {/* <Link className='questions-index-links' to={`/questions/${question.id}/edit`}>Edit</Link> */}
      {/* <button onClick={deleteQuestion(question.id)}>Delete</button> */}
   </li>
);

export default QuestionIndexItem;