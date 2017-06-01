import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

function MoviePreview(props) {
  return (
    <div>
      <div className="column">
        <img
          className="movie_poster"
          src={props.movie_poster}
          alt={props.movieTitle}
        />
      <h2 className="movieTitle">@{props.movieTitle}
      </h2>
      </div>
      <button>
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
    )
  }
  render() {
    return(
      <div>
        <form>
          <label></label>
          <input></input>
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

  render() {
    var movieOneTitle=this.state.playerOneTitle;
    var movieTwoTitle=this.state.playerOneName;
    return (

      <div>
        <div className="duel-section">
          {!movieOneTitle &&
          <MovieInput
            id='movieOne'
            label="Movie One"
            onSubmit={this.handleSubmit}
          />}
        </div>

        <div className="duel-section>">
          {!movieTwoTitle &&
          <MovieInput
            id="movieTwo"
            label="Movie Two"
            onSubmit={this.handleSubmit}
          />}
        </div>
      </div>
    )
  }
}

export default MovieDuel;
