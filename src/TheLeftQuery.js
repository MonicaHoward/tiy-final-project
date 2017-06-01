import React from 'react';
import $ from 'jquery';
import Link from 'react-router-dom';

const url = `https://image.tmdb.org/t/p/w500`;


function MoviePreview(props) {
  return (
    <div>
      <div>
        <img
          src={props.poster_path}
          alt={props.movie.title} />
      </div>
    </div>
  )
}

class SearchQuery extends React.Component {

  constructor() {
    super();
    this.state = {
      allMovieData: [],
      specificMovieData: [],
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
        console.log("YES O ",data);
      });
    }
  }

  render() {
    console.log('left query results', this.state.allMovieData[0])
    let displayThis;
    if (this.state.allMovieData.length > 0) {
      console.log('here');
      displayThis = this.state.allMovieData.map((movie) => {
        return (
          <div className="duel-query">
            <ul className="duel-search-results" key={movie.id}>
              <div className="box-header">
              </div>
              <li className="duel-movie-poster">
                <img src={`${url}${movie.poster_path}`} alt={"movie.title"} /></li>
              <li className="movie-title">{movie.title}</li>
              <li>Movie Rating: {movie.vote_average}</li>
              <li>Synopsis: {movie.overview.split('.', 1)}</li>
            </ul>


          </div>

        )
      });
    }
    return (
      <section className="duel-query">
        <div className="main-content">
          <div className="box-header">
          </div>
          <input type="text" className="basic-search"
            placeholder="enter movie title here"
            onChange={(evt) => this.handleChange(evt)}
            onKeyUp={(evt) => this.handleKeyUp(evt)}
            value={this.state.searchQuery}/>
            {displayThis}
        </div>
      </section>
    );
  }
}

class movieduel extends React.Component {
  constructor() {
    super();
    this.state={
      movieOneTitle:""
    }
    this.handleSubmit=this.handleSubmit.bind(this)
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

    return (
      <div>
        <div>
          {!movieOneTitle &&
            <SearchQuery
              id="movieOne"
              label="Movie One"
              onClick={this.handleClick}
            />}


        </div>

        <div>
            <SearchQuery />
        </div>

        {movieOneImage && movieTwoImage &&
          <Link to={{

          }}>
        <button>LET'S DUEL</button>
      </Link>}



      </div>
    )
  }
}
export default movieduel;
