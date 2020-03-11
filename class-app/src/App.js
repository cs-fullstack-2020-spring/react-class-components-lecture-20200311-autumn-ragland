import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import Classroom from './components/Classroom';

function App() {
  return (
    <div className="App">
      <h1>Class Based Components</h1>
      <Greetings/>
      <Classroom/>
    </div>
  );
}

export default App;
