import React, { Component } from "react";
import "../Result/Result.css"




const limage = {
    height: "200px",
    width: "200px",

}

class Result extends Component {
    constructor(props) {
        super(props);
        this.props = props;


    }



    saveBook(book) {
        const myBook = {
            title: book.volumeInfo.title,
            author: { type: String, required: true },
            link: { type: String, required: true },
            thumbnail: { type: String, required: true },
            description: { type: String, required: true },

        }

        console.log(book);
    }

    renderBook(index) {

        return this.props.results.map((book, i) => {
            return (
                <div className="container">

                    <div className="button-books">

                        <div className="button" ><button><a href={book.volumeInfo.previewLink}>View</a></button></div>
                        <div className="button" onClick={()=> this.saveBook(book)} ><button>Saved</button></div>
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