import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

import {getBooksQuery} from '../queries/queries';

import BookDetails from './BookDetails';

class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }

  displaybooks() {
    var data = this.props.data;
    if (data.loading) {
      return (
        <div>Loading books</div>
      );
    }
    else {
      return data.books.map(book => {
        return (
          <li key={book.id} onClick={(e)=>{this.setState({selected: book.id})}}>{book.name}</li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displaybooks()}
        </ul>
        <BookDetails bookid={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
