import React, { Component } from "react";


const fontStyle = {
    color: "white"
}


const viewButton = {
    borderRadius: "30px",
    backgroundColor: "#8FDB2C"
}


class Saved extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    renderSaved() {
        return this.props.results.map((book, i) => {
            return (
                <div key={i} className="container">

                    <div className="button-books">

                        <div className="button" ><button style={viewButton}><a href={book.link} target="_preview">View</a></button></div>
                        <div className="button"  onClick={this.props.onDeleteClick} ><button style={viewButton} data-id={book._id}>Delete</button></div>
                    </div>

                    <div className="book-title">{book.title}<p className="author">By: {book.authors}</p></div>
                    <div className="image-description">
                        <div className="book-image"><img  src={book.thumbnail} alt="logo" /></div>
                        <div className="book-image">{book.description}</div>
                    </div>
                </div>
            )
        })
    }
render() {
    return(
        <div className="saved-page">
        <h1 style={fontStyle}>Saved Books</h1>
        {this.renderSaved()}
        </div>
    )
}

}

export default Saved;