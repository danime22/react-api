import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Jumbotron/Jumbotron";
import MainPage from "../MainPage/MainPage";
import Result from "../Result/Result";
import API from "../../utils/API";


class Wrapper extends Component {
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  showPreview = event => {
    event.preventDefault();
    
  }

  handleFormSubmit = event => {
    //alert("clicked");
    event.preventDefault();
    console.log("work");
    API.search(this.state.booksSearch)
      .then(res => {this.setState({ books: res.data.items} )})
      .catch(err => console.log(err));
  };
state = {
    books: [],
    booksSearch: ""
};
 

  render() {
    return (
      <div>
      
        <Navbar />
        <Jumbotron />
        <MainPage onClick={this.handleFormSubmit} onDataChange={this.handleInputChange} recipeSearch={this.state.recipeSearch}/>
        <Result results={this.state.books}/>
      </div>

    )

  }

}

export default Wrapper;