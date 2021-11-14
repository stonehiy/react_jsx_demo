import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


import React, { Component } from 'react'

import Deme1 from './pages/demo1'
import Deme2 from './pages/demo1'

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header>

        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/demo1">
              <Deme1 />
            </Route>
            <Route path="/demo2">
              <Deme1 />
            </Route>
          </Switch>

        </Router>

      </div>
    )
  }
}

export default App;


