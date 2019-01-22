import React, { Component } from "react";
import "../Result/Result.css"
import logo from "../Result/thumb-1920-977249.png";

const containerLay = {
    border: "2px solid red",
}

const limage = {
    height: "200px",
    width: "200px",

}

class Result extends Component {

    render() {
        return (
            <div style={containerLay} className="container">
                <h1>Result</h1>
                <hr />
                <div className="button-books">

                    <div className="button"><button>View</button></div>
                    <div className="button"><button>Saved</button></div>
                </div>

                <div className="book-title">Title</div>
                <div className="book-author">Author</div>
                <div className="book-link">Link</div>
              
                <div className="image-description">
                    <div className="book-image"><img style={limage} src={logo} alt="logo" /></div>
                    <div className="book-image">lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>

            </div>

        )
    }
}


export default Result;