import React, { Component } from 'react';


class Book extends Component {
  render() {
    const {book} = this.props;
    return (
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.descrip}</td>
        <td>{book.pages}</td>
        <td>{book.status? "read" : "unread"}</td>
        <td><button>Change Status</button></td>
        <td><button onClick={() => this.props.onDelete(this.props.id)}>Delete Book</button></td>
      </tr>
    );
  }
}

export default Book;
