//U14123683
import React from 'react';
import './App.css';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FancyText title={true} text="U14123683 Task and Motivation App" />
        <TaskGenerator />
      </header>
    </div>
  );
}

export default App;