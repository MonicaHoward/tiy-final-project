import React from 'react';
import Link from 'react-router-dom';
import $ from 'jquery';
import PropTypes from 'prop-types';

const url = `https://image.tmdb.org/t/p/w500`

function MoviePreview(props) {
  return (
    <div>
      <div className="column">
        <img
          className="movie_poster"
          src={props.movie_poster}
          alt={props.movieTitle}
        />
      <h2 className="movieTitle">{props.movieTitle}
      </h2>
      </div>
      <button
        className='reset'
        onClick={props.onReset.bind(null, props.id)}
      >
        Reset
      </button>
    </div>
  )
}

MoviePreview.propTypes= {
  movie_poster: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequred

}
class MovieInput extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {
      allMovie
      movieTitle: ""
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var value=event.target.value;
    this.setState(function() {
      return {
        movieTitle: value
      }
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.props.id,
      this.props.movieTitle
    );
  }
  handleKeyUp(evt) {
    if (evt.keyCode === 13) {

      $.ajax({

        url: `https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=${this.state.movieTitle}`,


      })
      .done((data) => {
        this.setState({
          allMovieData: data.results
        })
        console.log("YES O ",data);
      });
    }
  }
  render() {
    return(
      <div>
        <form className="column"
          onSubmit={this.handleSubmit}>
          <label className='header'
            htmlFor='movieTitle'>
            {this.props.label}
          </label>
          <input
            id="movieTitle"
            placeholer="type here"
            type='text'
            value={this.state}
            autoComplete='off'
            onChange={this.handleChange}

        />
        </form>
        <button></button>
      </div>
    )
  }
}
MovieInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired
}

class MovieDuel extends React.Component {
  constructor() {
    super();
    this.state = {
      movieOneTitle: "",
      movieOneImage: "",
      movieTwoTitle: "",
      movieTwoImage: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, movieTitle) {
    this.setState(function() {
      var newState={};
      newState[id + 'Name'] = movieTitle;
      newState[id + 'Image'] = movieTitle;
      return newState;
    })
  }

  handleReset(id) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
})
}
  render() {
    var movieOneTitle=this.state.playerOneTitle;
    var movieTwoTitle=this.state.playerOneName;
    var movieOneImage=this.state.movieOneImage;
    var movieTwoImage=this.state.movieTwoImage;
    var match = this.props.match;
    return (

      <div>
        <div className="duel-section">
          {!movieOneTitle &&
          <MovieInput
            id='movieOne'
            label="Movie One"
            onSubmit={this.handleSubmit}
          />}
          {movieOneImage !== null &&
          <MoviePreview
            movie_poster={movieOneImage}
            movieTitle={movieOneTitle}
            onReset={this.handleReset}
            id='movieOne'
            />}


        </div>

        <div className="duel-section>">
          {!movieTwoTitle &&
          <MovieInput
            id="movieTwo"
            label="Movie Two"
            onSubmit={this.handleSubmit}
          />}
          {movieTwoImage !== null &&
         <MoviePreview
           movie_poster={movieTwoImage}
           movieTitle={movieTwoTitle}
           onReset={this.handleReset}
           id='movieTwo'
           />}

        </div>

        {movieOneImage && movieTwoImage &&
          <Link
            className='button'
            to={{
              pathname: match.url + '/results',
              search: '?movieOneTitle=' + movieOneTitle + '&pmovieTwoTitle=' + movieTwoTitle
            }}>
              Lets Duel
            </Link>}

      </div>
    )
  }
}

export default MovieDuel;


// {movieOneImage !== null &&
// <MoviePreview
//   movie_poster={movieOneImage}
//   movieTitle={movieOneTitle}
//   onReset={this.handleReset}
//   id='movieOne'
//   />}

// {movieTwoImage !== null &&
// <MoviePreview
//   movie_poster={movieTwoImage}
//   movieTitle={movieTwoTitle}
//   onReset={this.handleReset}
//   id='movieTwo'
//   />}
