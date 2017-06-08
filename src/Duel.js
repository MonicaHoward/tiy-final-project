import $ from 'jquery';
import {Link} from 'react-router'
var React = require('react');
var PropTypes = require('prop-types');


const url = `https://image.tmdb.org/t/p/w500`;

function MoviePreview (props) {
  return (
    <div>
      <div className='column'>
        <img
          className='movie_poster'
          src={props.movie_poster}
          alt={'movie_poster for ' + props.movie}
        />
        <h2 className='movie'>@{props.movie}</h2>
      </div>
      <button
        className='reset'
        onClick={props.onReset.bind(null, props.id)}>
          Reset
      </button>
    </div>
  )
}

MoviePreview.propTypes = {
  movie_poster: PropTypes.string.isRequired,
  movie: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

class MovieInput extends React.Component {
  constructor() {
    super();
    this.state = {
      allMovieData: [],
      seachQuery: ''
    }
  }
  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        allMovieData: [],
      }
    });
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
        console.log("whooooooo",data);
      });
    }

  }


  render() {
    let displayThis;
    if (this.state.allMovieData.length > 0) {
      displayThis = this.state.allMovieData.map((movie) => {
        return (
          <ul className="search-results" key={movie.id} >
            <div className="duel-box-header">
            </div>
            <div>
            <div className="duel-movie-poster">
              <ul>
              <li><img src={`${url}${movie.poster_path}`} alt={movie.title} /></li>
              </ul>
            </div>

            <div className="duel-movie-info">
              <li className="movie-title">{movie.title}</li>
              <li>Rating: {movie.vote_average}</li>
              <li>Popularity: {movie.popularity}</li>
              <li>Votes: {movie.vote_count}</li>
            </div>
</div>
          </ul>

        )
      });
    }
  return (

      <div className='column'>
        <section className="basic-search-section">
        <div>
          <input type="text" className="basic-search"
            placeholder="enter movie title here"
            onChange={(evt) => this.handleChange(evt)}
            onKeyUp={(evt) => this.handleKeyUp(evt)}
            value={this.state.searchQuery}/>
        </div>
        <div>
          {displayThis}
        </div>


      </section>
    </div>
  )
  }
}

MovieInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

MovieInput.defaultProps = {
  label: 'movie',
}

class Duel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieOneName: '',
      movieTwoName: '',
      movieOneImage: null,
      movieTwoImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(id, movie) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = movie;
      newState[id + 'Image'] = 'https://image.tmdb.org/t/p/w500' + movie;
      return newState;
    });
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
    var match = this.props.match;
    var movieOneName = this.state.movieOneName;
    var movieOneImage = this.state.movieOneImage;
    var movieTwoName = this.state.movieTwoName;
    var movieTwoImage = this.state.movieTwoImage;

    return (
      <div>
        <div className='duel-query'>
          {!movieOneName &&
            <MovieInput className="main-content"
              id='movieOne'
              label='Movie One'
              onSubmit={this.handleSubmit}
            />}

          {movieOneImage !== null &&
            <MoviePreview
              movie={movieOneName}
              onReset={this.handleReset}
              id='movieOne'
            />}
        </div>
        <div className="duel-query">
          {!movieTwoName &&
            <MovieInput
              id='movieTwo'
              label='Movie Two'
              onSubmit={this.handleSubmit}
            />}

          {movieTwoImage !== null &&
            <MoviePreview
              movie_poster={movieTwoImage}
              movie={movieTwoName}
              onReset={this.handleReset}
              id='movieTwo'
            />}
        </div>


        {movieOneImage && movieTwoImage &&
          <Link
            className='button'
            to={{
              pathname: match.url + '/results',
              search: '?movieOneName=' + movieOneName + '&movieTwoName=' + movieTwoName
            }}>
              MovieDuel
          </Link>}
      </div>
    )
  }
}

export default Duel;
