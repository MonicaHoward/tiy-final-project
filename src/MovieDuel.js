import React from 'react';
import MovieSearch from './MovieSearch.js';


const url = `https://image.tmdb.org/t/p/w500`;



class MovieDuel extends React.Component {

  render() {

    return (
      <div>
        <div className="movie-duel-search">
          <MovieSearch />
        </div>

        <div className="movie-duel-search">
          <MovieSearch />
        </div>

      </div>
    )
  }
}
export default MovieDuel;
