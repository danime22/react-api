import React, { Component } from "react";
import API from "../../utils/API";


const colyp = {
    padding: "10px",
    width: "100%",
}


const font = {
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    fontWeight: "bold"

}



class SearchPane extends Component {
    constructor(props) {
        super(props);

        this.state = {
            booksSearch: "",
            results: []

        }


        this.props = props;
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    handleFormSubmit = event => {

        event.preventDefault();
        console.log("work");
        API.getBooks(this.state.booksSearch)
            .then(res => this.callback(res.data))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div style={colyp} className="w-100">
                        <h1 style={font}> BOOK Search</h1>

                        <form className="form-inline my-2 my-lg-0" >
                            <input className="form-control mr-sm-2" type="search" name="booksSearch" value={this.props.bookSearch} onChange={this.props.onDataChange} placeholder="Search" arial-label="Search" />
                            <button onClick={this.props.onClick} className="btn btn-outline-success my-2 my-sm-0">Search</button>
                        </form>


                    </div>
                </div>
            </div>
        )
    }


}

export default SearchPane;