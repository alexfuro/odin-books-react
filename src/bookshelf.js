import React, { Component } from 'react';
import Book from './book';


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

class BookShelf extends Component {
  constructor(props){
    super(props);
    this.state = {books: sample};
  }
  render() {
    const books = this.state.books;
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Pages</th>
            <th>Read Status</th>
            <th>Read/Unread</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book,index)=>(
              <Book book={book} key={index} id={index} />
            ))}
        </tbody>
      </table>
    );
  }
}

export default BookShelf;
