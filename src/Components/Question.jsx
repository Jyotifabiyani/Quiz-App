import React, { useState, useEffect } from 'react';
import Timer from './Timer';

const Question = ({ question, onAnswer, questionNumber, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeUp, setTimeUp] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    const isCorrect = question.correctAnswer === selectedOption;
    onAnswer(isCorrect, selectedOption);
    setSelectedOption(null);
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    onAnswer(false, null);
  };

  useEffect(() => {
    setSelectedOption(null);
    setTimeUp(false);
  }, [question]);

  return (
    <div className="question-container">
      <div className="question-header">
        <h3>Question {questionNumber} of {totalQuestions}</h3>
        <Timer 
          timeLimit={question.timeLimit} 
          onTimeUp={handleTimeUp} 
          key={question.id}
        />
      </div>
      
      <h2>{question.question}</h2>
      
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
            disabled={timeUp}
          >
            {option}
          </button>
        ))}
      </div>
      
      <button 
        className="submit-btn" 
        onClick={handleSubmit}
        disabled={!selectedOption || timeUp}
      >
        Submit
      </button>
      
      {timeUp && <p className="time-up">Time's up!</p>}
    </div>
  );
};

export default Question;