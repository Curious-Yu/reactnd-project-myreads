import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookList extends Component {
  static propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    onChangeBook: PropTypes.func.isRequired,
  }

  render() {
  const { booksOnShelf, onChangeBook } = this.props

  const shelves = {
    currentlyReading: ['Currently Reading', 'currentlyReading'],
    wantToRead: ['Want to Read', 'wantToRead'],
    read: ['Read', 'read']
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Object.keys(shelves).map((shelf) => (
            <BookShelf
              key={shelf}
              title={shelves[shelf][0]}
              books={booksOnShelf.filter(book => book.shelf === shelves[shelf][1])}
              onChangeBook={onChangeBook}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>
          Add a book
        </Link>
      </div>
    </div>
  )
}
}

export default BookList;
