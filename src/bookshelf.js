import React, { Component } from 'react';
import './bookshelf.css';
import Book from './book';


class BookShelf extends Component {
  render() {
    const books = this.props.books;
    return (
      <div className='Bookshelf'>  
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
                <Book book={book} key={index} id={index} 
                onDelete={this.props.onDelete} onToggleStatus={this.props.toggleStatus}/>
                ))}
            </tbody>
        </table>
      </div>
    );
  }
}

export default BookShelf;
