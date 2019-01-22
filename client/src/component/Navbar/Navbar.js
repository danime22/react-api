import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm bg-light">


            <ul className="navbar-nav">
            <li> Google</li>
                <li className="nav-item">
                    <h3> <Link to="Search" className={window.location.pathname === "Search"}>
                        Search
</Link></h3>
                </li>
                <li class="nav-item">
                    <h3> <Link to="Saved" className={window.location.pathname === "Saved"}>
                        Saved
</Link></h3>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar;