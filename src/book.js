import React, { Component } from 'react';


class Book extends Component {
  render() {
    return (
      const {book} = this.props.book;
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.descrip}</td>
        <td>{book.pages}</td>
        <td>{book.status? "read" : "unread"}</td>
        <td><button>Change Status</button></td>
        <td><button>Delete Book</button></td>
      </tr>
    );
  }
}

export default App;
