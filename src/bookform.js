import React, { Component } from 'react';

class BookForm extends Component {
  render() {
    return (
      <form className="BookForm">
        <legend>Add to Library</legend>
        <label for="title">Title</label>
        <input type="text" id="title" name="title" placeholder="title" />
        
        <label for="author">Author</label>
        <input type="text" id="author" name="author" placeholder="author"/>
        
        <label for="descrip">Title</label>
        <textarea id="descrip" name="descrip" ></textarea>
        
        <label for="pages">Title</label>
        <input type="number" id="pages" name="pages" placeholder="1" min="1" />
        
        <label for="status">Read?</label>
        <input type="checkbox" id="status" name="status" />

        <input type="submit" id="submitBookForm" name="submitBook" value="Save" />
      </form>
    );
  }
}

export default BookForm;
