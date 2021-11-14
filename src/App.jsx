import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';


import React, { Component, } from 'react'

import Deme1 from './pages/demo1'
import Deme2 from './pages/demo2'

class App extends Component {
  render() {
    return (

      <div className="App">

        <Router>
          <div>
            <Link to="/demo1">demo1</Link>
            <Link to="/demo2">demo2</Link>
            <div>
              <Switch>
                <Route path="/demo1">
                  <Deme1 />
                </Route>
                <Route path="/demo2">
                  <Deme2 />
                </Route>
                <Redirect exact from="/" to="/home" />
              </Switch>
            </div>
          </div>
        </Router>




      </div >
    )
  }
}

export default App;


