import React from "react";




const colyp = {
    border: "2px solid blue",
    padding: "10px"
}

function MainPage() {

    return (
        <div class="container">
            <div class="row">
                <div style={colyp} class="w-100">
                    <h1> BOOK Search</h1>

                   <form className="form-inline my-2 my-lg-0" >
                   <input className="form-control mr-sm-2" type="search" placeholder="Search" arial-label="Search"/>
                   <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                   </form>


                </div>
                </div>
                <hr />
            </div>
            
            )
        }
        
export default MainPage;