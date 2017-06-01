import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

class MovieInput extends React.Component {

  constructor(props) {
    super();
    this.setState = {
      movieTitle: ""
    }
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
