import React, { useState, useEffect } from 'react';

const Timer = ({ timeLimit, onTimeUp, paused }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    setTimeLeft(timeLimit);
    
    if (paused) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLimit, onTimeUp, paused]);

 
  const getTimerColor = () => {
    if (timeLeft <= 5) return '#ff4444'; // Red when time is critical
    if (timeLeft <= timeLimit/2) return '#ffbb33'; // Yellow when half time left
    return '#00C851'; // Green when plenty of time
  };

  return (
    <div className="timer" style={{ backgroundColor: getTimerColor() }}>
      ⏱️ {timeLeft}s
    </div>
  );
};

export default Timer;