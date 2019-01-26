import React, { Component } from "react";
import "./Navbar.css";
import Saved from "../Saved/Saved";




class Navbar extends Component {




    render() {
        return (
            <nav className="navbar navbar-expand-sm">


            <ul className="navbar-nav">
                <li>
                    <button  className="btn btn-outline-success my-2 my-sm-0">Search</button>
                </li>

                <li>
                    <button onClick={this.Saved} className="btn btn-outline-success my-2 my-sm-0">Saved</button>
                </li>

            </ul>

        </nav>
        )
    }
}

export default Navbar;