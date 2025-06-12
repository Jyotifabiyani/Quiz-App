import React from 'react';

const Results = ({ score, totalQuestions, userAnswers, quizData, onRestart }) => {
  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      <p className="score">You scored {score} out of {totalQuestions}</p>
      
      <div className="answers-review">
        <h3>Review your answers:</h3>
        {userAnswers.map((userAnswer, index) => {
          const question = quizData.find(q => q.id === userAnswer.questionId);
          return (
            <div key={index} className={`answer ${userAnswer.isCorrect ? 'correct' : 'incorrect'}`}>
              <p><strong>Question:</strong> {question.question}</p>
              <p><strong>Your answer:</strong> {userAnswer.answer || 'No answer (time up)'}</p>
              <p><strong>Correct answer:</strong> {question.correctAnswer}</p>
            </div>
          );
        })}
      </div>
      
      <button className="restart-btn" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;