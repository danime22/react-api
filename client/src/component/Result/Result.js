import React, { Component } from "react";
import "../Result/Result.css";
import API from "../../utils/API";

const limage = {
    height: "200px",
    width: "200px",

}

const viewButton = {
    borderRadius: "30px",
    backgroundColor: "#8FDB2C"
}

class Result extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }



    handleSaveBook(book) {
        const myBook = {
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors[0],
            link: book.volumeInfo.previewLink,
            thumbnail: book.volumeInfo.imageLinks.thumbnail,
            description: book.volumeInfo.description,
        }
        console.log(myBook);

        API.saveBook(myBook)
        .then(res =>  console.log)
        .catch(err => console.log);
    }

    renderBook(index) {

        return this.props.results.map((book, i) => {
            return (
                <div className="container">

                    <div className="button-books">

                        <div className="button" ><button style={viewButton}><a href={book.volumeInfo.previewLink} target="_preview">View</a></button></div>
                        <div className="button" onClick={()=> this.handleSaveBook(book)} ><button style={viewButton}>Saved</button></div>
                    </div>

                    <div className="book-title">{book.volumeInfo.title}<p className="author">By: {book.volumeInfo.authors}</p></div>
                    <div className="image-description">
                        <div className="book-image"><img style={limage} src={book.volumeInfo.imageLinks.thumbnail} alt="logo" /></div>
                        <div className="book-image">{book.volumeInfo.description}</div>

                    </div>
                </div>
            )
        })

    }

    render() {
        return (

            <div className="result-page">

                <h1>Result</h1>
                {
                    this.renderBook()
                }

            </div>

        )

    }




}




export default Result;