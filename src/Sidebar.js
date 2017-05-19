import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <section className="side-bar">
        <h3><a href="MovieDuel.js">MOVIE DUEL</a></h3>
        <h3><a href="#">MOVIE RANDOMIZER</a></h3>
        <h3><a href="./MovieSearch.js">MOVIE SEARCH</a></h3>
      </section>
    );
  }
}

module.exports = Sidebar;
