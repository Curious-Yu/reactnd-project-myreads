import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    booksOnShelf: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((booksOnShelf) => {
        this.setState({booksOnShelf})
      })
  }

  changeBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        this.setState((currentState) => ({
          booksOnShelf: currentState.booksOnShelf.filter(b => b.id !== book.id).concat([book])
        }))
      })
  }

  render() {
  return (
    <div className="app">
      <Route exact path='/' render={() => (
          <BookList
            booksOnShelf={this.state.booksOnShelf}
            onChangeBook={this.changeBook}
          />
      )} />
      <Route path='/search' render={() => (
          <BookSearch
            booksOnShelf={this.state.booksOnShelf}
            onChangeBook={this.changeBook}
          />
      )} />
    </div>
  )
}
}

export default BooksApp;
