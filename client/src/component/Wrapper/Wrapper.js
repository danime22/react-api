import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Jumbotron/Jumbotron";
import ResultsPane from "../ResultsPane/ResultsPane";
import API from "../../utils/API";


class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.renderSearchResults = true;
  }

  handleSearchClicked = event => {
    event.preventDefault();
    this.renderSearchResults = true;
    this.setState({books: []});
  }


  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  showSavedBooks = event => {
    event.preventDefault();
    this.doShowSavedBooks();
  }

  doShowSavedBooks() {
    this.renderSearchResults = false;
    API.getBooks()
    .then(res => {this.setState({ saved: res.data} )})
   //.then(res => console.log(JSON.stringify(res.data)))
    .catch(err => console.log(err))
  }


  showPreview = event => {
    event.preventDefault();
    
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.renderSearchResults = true;
    API.search(this.state.booksSearch)
      .then(res => {this.setState({ books: res.data.items} )})
      .catch(err => console.log(err));
  };

  deleteBook = event => {
    event.preventDefault();
    var id=event.target.getAttribute('data-id');
    API.deleteBook(id)
      .then(res => {this.doShowSavedBooks()})
      .catch(err => console.log(err));
  }; 


state = {
    saved: [],
    books: [],
    booksSearch: ""
};
 

  render() {
    return (
      <div>
      
        <Navbar onSavedClick={this.showSavedBooks} onSearchClick={this.handleSearchClicked} />
        <Jumbotron />

          
        <ResultsPane searchResults={this.state.books} savedResults={this.state.saved} renderSearchResults={this.renderSearchResults} onClick={this.handleFormSubmit} onDataChange={this.handleInputChange} bookSearch={this.state.recipeSearch} onDelete={this.deleteBook}/>
        

      </div>

    )

  }

}

export default Wrapper;