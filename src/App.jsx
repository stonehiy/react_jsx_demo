import logo from './logo.svg';
import './App.css';
import React, { Component,} from 'react'

import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router,  } from "react-router-dom";
import routes from './route/routes'

import Bottom from './component/bottom/bottom'


class App extends Component {


  


  render() {
   
    return (
      <Router>
        <div className="app">
          <div className="body">
            {renderRoutes(routes)}
          </div>
          <Bottom className='bottom'  />

        </div>
      </Router>
    )
  }
}

export default App;


