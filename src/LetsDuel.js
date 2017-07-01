
import React from 'react';
import MovieDuel from './MovieDuel.js';

class LetsDuel extends React.Component {
  render() {
    return (
      <section>
      <div className="duel-container">
        <MovieDuel
          />
      </div>
        <div className="duel-container">
        <MovieDuel />
      </div>
    </section>
    )
  }
}
export default LetsDuel
