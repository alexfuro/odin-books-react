import React, { Component } from 'react';
import Book from './book';

class BookShelf extends Component {
  constructor(props){
    super(props);
    this.state = {books: []};
  }
  render() {
    return (
      <table>
        <thead>
          <th>
            <td>Title</td>
            <td>Author</td>
            <td>Description</td>
            <td>Pages</td>
            <td>Read Status</td>
            <td><button>Change Status</button></td>
            <td><button>Delete Book</button></td>
          </th>
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

export default App;
