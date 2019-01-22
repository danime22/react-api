import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Jumbotron/Jumbotron";
import MainPage from "../MainPage/MainPage";
import Result from "../Result/Result";


class Wrapper extends Component {

   render() {
       return (
     <div>
     <Navbar />
     <Jumbotron />
<MainPage />
<Result />
     </div>

       )
       
   }

}

export default Wrapper;