import React from 'react';
import { Link } from 'react-router-dom';



const QuestionIndexItem = ({ question, deleteQuestion }) => (
   <li className="questions-index">
      <Link to={`/questions/${question.id}`}>{question.body}</Link>
      <Link to={`/questions/${question.id}/edit`}>Edit</Link>
      <button onClick={deleteQuestion(question.id)}>Delete</button>
   </li>
);

export default QuestionIndexItem;