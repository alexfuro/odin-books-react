import React, { Component } from 'react';
import './App.css';
import Bookshelf from './bookshelf';
import BookForm from './bookform';


const sample = [
  {
    title: "Moby Dick",
    author: "Some dude",
    descrip: "Whales man",
    pages: "2000",
    status: true
  },{
    title: "Dick Tracy",
    author: "Some other dude",
    descrip: "Dectective man",
    pages: "200",
    status: false
  },{
    title: "No Longer Human",
    author: "Dazai",
    descrip: "Jap man",
    pages: "500",
    status: false
  }
];


class App extends Component {
  constructor(props){
    super(props);
    this.state = {books: sample};    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Bookshelf</h1>
        </header>
        <Bookshelf books={this.state.books} />
        <BookForm />
      </div>
    );
  }
}

export default App;
