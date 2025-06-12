import React, { useState } from 'react';
import Question from './Question';
import Results from './Results';
import { quizData } from '../data';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (isCorrect, answer) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setUserAnswers([...userAnswers, {
      questionId: quizData[currentQuestion].id,
      answer,
      isCorrect
    }]);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  return (
    <div className="quiz-container">
      {quizCompleted ? (
        <Results 
          score={score} 
          totalQuestions={quizData.length}
          userAnswers={userAnswers}
          quizData={quizData}
          onRestart={restartQuiz}
        />
      ) : (
        <Question
          question={quizData[currentQuestion]}
          onAnswer={handleAnswer}
          questionNumber={currentQuestion + 1}
          totalQuestions={quizData.length}
        />
      )}
    </div>
  );
};

export default Quiz;