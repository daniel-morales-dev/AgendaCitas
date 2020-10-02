import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  return (
      <Router>
          <Navbar/>
          <div className="container col-sm-4">
              <Routes/>
          </div>
      </Router>
  );
}

export default App;