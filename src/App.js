import React, { Component } from 'react';
import NavBar from './components/NavBar'
import CharlieCard from './components/CharlieCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <CharlieCard />
      </div>
    );
  }
}

export default App;
