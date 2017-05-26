import React from 'react';

class MovieRandomizer extends React.Component {

  render() {
    return (
      <section className="movie-randomizer">
        <button>PUSH FOR RANDOM MOVIE</button>
        <h1>-OR-< br />CHOOSE A GENRE</h1>
        <button>ACTION</button>
        <button>COMEDY</button>
        <button>HORROR</button>

      </section>
    )
  }
}

export default MovieRandomizer;
