import React, { Component } from 'react';
import './bookform.css';

class BookForm extends Component {
  render() {
    return (
      <form className="BookForm" onSubmit={this.props.onSubmit}>
        <legend>Add to Library</legend>
        <label>Title:</label>
        <input type="text" name="title" placeholder="title" /><br />
        
        <label>Author:</label>
        <input type="text" name="author" placeholder="author"/><br />
        
        <label>Description:</label>
        <textarea name="descrip" ></textarea><br />
        
        <label>Pages:</label>
        <input type="number"name="pages" placeholder="1" min="1" /><br />
        
        <label>Read?</label>
        <input type="checkbox" name="status" /><br />

        <input type="submit" id="submitBookForm" name="submitBook" value="Save" />
      </form>
    );
  }
}

export default BookForm;
