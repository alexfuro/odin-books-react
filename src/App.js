import React, { Component } from 'react';
import './App.css';
import Bookshelf from './bookshelf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Bookshelf</h1>
        </header>
        <Bookshelf />
      </div>
    );
  }
}

export default App;
