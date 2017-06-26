import React from 'react';
import MovieSearch from './MovieSearch.js';
import $ from 'jquery';








class MovieDuel extends React.Component {
  constructor() {
    super();
    this.state = {
      allMovieData: []
    }
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=${this.state.searchQuery}`,
      })
      .done((data) => {
        this.setState({
          allMovieData: data.results
        })
        console.log("this should be the only ajax call, right?",data);
      });
    }
  }

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
