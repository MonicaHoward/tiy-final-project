import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <section className="side-bar">
        <h3><a href="#">MOVIE DUEL</a></h3>
        <h3><a href="#">MOVIE RANDOMIZER</a></h3>
      </section>
    );
  }
}

module.exports = Sidebar;
