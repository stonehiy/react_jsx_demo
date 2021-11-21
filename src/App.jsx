import logo from './logo.svg';
import './App.css';
import React, { Component, } from 'react'

import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router, } from "react-router-dom";
import routes from './route/routes'




class App extends Component {



  render() {
    return (
      <Router>

        {renderRoutes(routes)}

      </Router>
    )
  }
}

export default App;


