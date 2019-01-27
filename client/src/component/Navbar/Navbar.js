import React, { Component } from "react";
import "./Navbar.css";





class Navbar extends Component {

constructor(props) {
    super(props);
    this.props = props;
}



    render() {
        return (
            <nav className="navbar navbar-expand-sm">


            <ul className="navbar-nav">
                <li>
                    <button  onClick={this.props.onSearchClick} className="btn btn-outline-success my-2 my-sm-0">Search</button>
                </li>

                <li>
                    <button onClick={this.props.onSavedClick} className="btn btn-outline-success my-2 my-sm-0">Saved</button>
                </li>

            </ul>

        </nav>
        )
    }
}

export default Navbar;