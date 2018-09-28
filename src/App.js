import React, { Component } from 'react';
import NavBar from './components/NavBar'
import CharlieCard from './components/CharlieCard';
import ScoreDisplay from './components/ScoreDisplay';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <ScoreDisplay />
      
      </div>
    );
  }
}

export default App;
