import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Wrapper from "./component/Wrapper/Wrapper";

function App() {
  return (

    <Router>

    <div>
    <Route exact path="/" component={Wrapper} />
    </div>
    </Router>
  )
}

export default App;
