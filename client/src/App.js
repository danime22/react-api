import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Wrapper from "./component/Wrapper/Wrapper";


class App extends Component {
  state = {
    books: [],
    booksSearch: ""
  };


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Wrapper} />
        </div>
      </Router>
    )
  }




}

export default App;
