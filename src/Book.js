import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeBook: PropTypes.func.isRequired,
  }

  changeShelf = (e) => {
    if (this.props.onChangeBook) {
      this.props.onChangeBook(this.props.book, e.target.value)
    }
  }

  render() {
    const { book } = this.props;
    const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : '';

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: 'url(' + thumbnail + ')'
            }}
          >
          </div>
          <div className="book-shelf-changer">
            <select value={book.shelf ? book.shelf : 'none'} onChange={this.changeShelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book;
