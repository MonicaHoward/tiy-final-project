import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// COMPONENTS
import MovieSearch from './MovieSearch.js';
import LetsDuel from './LetsDuel.js'

// CSS & EXTRAS
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>Movie Duel</h1>
            <p>An app for movie lovers</p>
          </header>

          <nav className="side-bar">
            <Link to="/movie-duel-new">
              <h3>MOVIE DUEL</h3>
            </Link>
            <Link to="/movie-search">
              <h3>MOVIE SEARCH</h3>
            </Link>
          </nav>

          <Route path="/movie-duel-new" component={LetsDuel} />

          <Route path="/movie-search" exact component={MovieSearch} />



        </div>
      </Router>
    );
  }
}

export default App;

// <Route path="/movie-duel" component={TheLeftQuery } />
// <Route path="/movie-duel" component={ RightQuery} />
// <Route path="/movie-duel-2" component={MovieDuel} />
