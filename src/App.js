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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  newBook(event){
    const title = event.target.children[2].value;
    const author = event.target.children[5].value;
    const descrip = event.target.children[8].value;
    const pages = event.target.children[11].value;
    const status = event.target.children[14].checked;

    return { title, author, descrip, pages, status };
  }
  clearForm(event){
    event.target.children[2].value    = "";
    event.target.children[5].value    = "";
    event.target.children[8].value    = "";
    event.target.children[11].value   = "";
    event.target.children[14].checked = false;
  }
  addToLibrary(book){
    const books = this.state.books;
    books.push(book);
    this.setState({books});
  }
  handleSubmit(event){
    event.preventDefault();
    
    const book = this.newBook(event);

    if(book) {
      this.addToLibrary(book);
      this.clearForm(event);
    }        
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Bookshelf</h1>
        </header>
        <Bookshelf books={this.state.books} />
        <BookForm onSubmit={this.handleSubmit}/>
      </div>
    );
  } 
}

export default App;
