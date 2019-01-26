import React, { Component } from "react";



class Saved extends Component {
    render() {
        return (
       
                <div className="container">
                    <div className="button-books">

                        <div className="button" ><button>View</button></div>
                        <div className="button" ><button>Delete</button></div>
                    </div>

                    <div className="book-title"></div>
                    <div className="image-description">
                        <div className="book-image">Image</div>
                        <div className="book-image">Descriptiom</div>

                    </div>
                </div>

        )
    }
}

export default Saved;