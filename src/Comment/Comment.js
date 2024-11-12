import './Comment.css';
import vector1 from '../photos/Vector1.png';
import { useState, useEffect } from 'react';
import { getAllQuestions, addQuestion } from '../FetchQuestions';


export const Comment = () => {
  const [myQuestions, setQuestions] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getAllQuestions(setQuestions);
  }, []);

  const handleInputChange = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div>
      <div className='vectorContainer'>
        <img className='vector' src={vector1} alt='designVector' />
      </div>
      <div className="commentContainer">
        <h1 className='subH1'>
          Every week on our Instagram Account<br /> we answer your questions.<br /> Please leave any comments down below!
        </h1>
        <div className='commentsList'>
          {myQuestions.map((question, question_id) => (
            <p key={question_id} className='fetchedComment'>
              {question.name}
            </p>
          ))}
          </div>
        <div className='commentBox'>
          <textarea 
            className='commentInput'
            placeholder='Add a question'
            rows='3'
            onInput={handleInputChange}
            value={name}
            onChange={(e) => setName(e.target.value)}          />
          <button onClick={ ()=> addQuestion(name, setName, setQuestions)} className='commentBtn' type="submit">Leave a comment</button>
        </div>
      </div>
    </div>
  );
};
