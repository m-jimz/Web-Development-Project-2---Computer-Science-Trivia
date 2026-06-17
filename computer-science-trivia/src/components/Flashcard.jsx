import { useState } from 'react';
import { quizList } from '/home/marco/Web-Development-Project-2---Computer-Science-Trivia/computer-science-trivia/src/components/quizList.jsx';

export default function Flashcard() {

  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // guard to control to move back 
  let hasPrev = index > 0;
  let hasNext = index < quizList.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
      setShowAnswer(false);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
      setShowAnswer(false);
    }
  }

  function handleMoreClick() {
    setShowAnswer(!showAnswer);
  }
 
  let quiz = quizList[index];
  return (
    <>
    
      <button
        onClick={handlePrevClick}
        disabled={!hasPrev}
      >
        Previous
      </button>

      <button
        onClick={handleNextClick}
        disabled={!hasNext}
      >
        Next
      </button>
  <div className={showAnswer ? 'card flipped' : 'card'} onClick={handleMoreClick}>
  <div className="front">
    <h2>{quiz.question}</h2>
  </div>
  <div className="back">
    <h2>{quiz.answer}</h2>
  </div>



  </div>  

  
    </>
  );
}