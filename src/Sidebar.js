import React from 'react';
import MovieSearch from './MovieSearch.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <Router>
        <section className="side-bar">
          

          <h3><a href="MovieDuel.js">MOVIE DUEL</a></h3>
          <h3><a href="#">MOVIE RANDOMIZER</a></h3>

        </section>
      </Router>
    );
  }
}

module.exports = Sidebar;
