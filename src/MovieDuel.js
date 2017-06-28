import React from 'react';
import MovieSearch from './MovieSearch.js';
import $ from 'jquery';

const url = `https://image.tmdb.org/t/p/w500`;

class MovieDuel extends React.Component {
  constructor() {
    super();
    this.state = {
      allMovieData: [],
      searchQuery: ''
    }
  }
  handleChange(evt) {
    this.setState({
      searchQuery: evt.target.value
    })
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
    let displayThis;
    if (this.state.allMovieData.length > 0) {
      displayThis = this.state.allMovieData.map((movie) => {
        return (
          <ul className="search-results" key={this.state.smovie.id}>
            <div className="box-header">
            </div>
            <li className="movie-poster"><img src={`${url}${this.state.movie.poster_path}`} alt={this.this.state.movie.title} /></li>
            <div className="movie-info">
              <li className="movie-title">{this.state.movie.title}</li>
              <li>Movie Rating: {this.state.movie.vote_average}</li>
              <li>Synopsis: {this.state.movie.overview.split('.', 1)}</li>
            </div>
          </ul>
        )
      });
    }

    return (
      <div>
        <div className="movie-duel-search">
          <MovieSearch
          {displayThis}/>
        </div>

        <div className="movie-duel-search">
          <MovieSearch />
        </div>

      </div>
    )
  }
}
export default MovieDuel;
