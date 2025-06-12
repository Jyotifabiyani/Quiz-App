import React, { useState } from 'react';
import './App.css';
import Quiz from './Components/Quiz';

function App() {
  return (
    <div className="app">
      <h1>Quiz App</h1>
      <Quiz />
    </div>
  );
}

export default App;