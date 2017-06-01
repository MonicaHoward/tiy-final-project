import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// COMPONENTS

import MovieSearch from './MovieSearch.js';
import TheLeftQuery from './TheLeftQuery.js'
import RightQuery from './RightQuery.js';
import MovieDuel from './MovieDuel.js'
import MovieRandomizer from './MovieRandomizer.js'
import Footer from './Footer.js';
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
            <Link to="/movie-duel"><h3>MOVIE DUEL</h3></Link>
            <Link to="/movie-randomizer"><h3>MOVIE RANDOMIZER</h3></Link>
            <Link to="/movie-search"><h3>MOVIE SEARCH</h3></Link>
          </nav>

          <Route path="/movie-search" exact component={MovieSearch} />
          <Route path="/movie-search" exact component={ MovieSearch } />
          <Route path="/movie-duel" component={TheLeftQuery } />
          <Route path="/movie-duel" component={ RightQuery} />
          <Route path="/movie-duel-2" component={MovieDuel} />


          <Route path="/movie-randomizer" component={MovieRandomizer}></Route>
          <Route path="/" component={ Footer } />
        </div>
      </Router>
    );
  }
}

export default App;
