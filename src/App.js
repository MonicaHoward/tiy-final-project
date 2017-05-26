import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// COMPONENTS
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import MovieSearch from './MovieSearch.js';
import LeftQuery from './LeftQuery.js'
import RightQuery from './RightQuery.js';
import Footer from './Footer.js';
// CSS & EXTRAS
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route path="/" component={ Header } />
        <Route path="/" component={Sidebar} />
        <Route path="/movie-search" component={ MovieSearch } />

          <LeftQuery />
          <RightQuery />
        
          <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
