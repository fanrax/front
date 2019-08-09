import React, { Component } from 'react';
import './App.css';
import Login from "../src/pages/login/login"
import Index from "../src/pages/index/index"
import { BrowserRouter as Router , Route} from "react-router-dom";

class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/index" component={Index} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
