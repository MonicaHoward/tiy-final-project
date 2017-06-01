import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

const url = `https://image.tmdb.org/t/p/w500`;

class SearchQuery extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      allMovieData: [],
      searchQuery: ''
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
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

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className='header'></label>
          <input type="text" className="basic-search"
            placeholder="enter movie title here"
            value={this.state.searchQuery}
            onChange={(evt) => this.handleChange(evt)}
            onKeyUp={(evt) => this.handleKeyUp(evt)}/>
        </form>
        <button>SUBMIT</button>
      </div>
    )
  }
}

SearchQuery.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired
}
class LetsDuel extends React.Component {

  constructor() {
    super();
    this.state = {
      allMovieData: [],
      specificMovieData: [],
      searchQuery: ''
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
              <li className="duel-movie-poster"><img src={`${url}${movie.poster_path}`} alt={"movie.title"} /></li>
              <li className="movie-title">{movie.title}</li>
              <li>Movie Rating: {movie.vote_average}</li>
              <li>Synopsis: {movie.overview.split('.', 1)}</li>
            </ul>

            <ul className="duel-search-results" key={movie.id}>
              <div className="box-header">
              </div>
              <li className="duel-movie-poster"><img src={`${url}${movie.poster_path}`} alt={"movie.title"} /></li>
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
        <SearchQuery />
      </section>
    );
  }

}
export default LetsDuel;


// <div className="duel-query">
//   <ul className="duel-search-results" key={movie.id}>
//     <div className="box-header">
//     </div>
//     <li className="duel-movie-poster"><img src={`${url}${movie.poster_path}`} alt={"movie.title"} /></li>
//     <li className="movie-title">{movie.title}</li>
//     <li>Movie Rating: {movie.vote_average}</li>
//     <li>Synopsis: {movie.overview.split('.', 1)}</li>
//   </ul>
//
//   <ul className="duel-search-results" key={movie.id}>
//     <div className="box-header">
//     </div>
//     <li className="duel-movie-poster"><img src={`${url}${movie.poster_path}`} alt={"movie.title"} /></li>
//     <li className="movie-title">{movie.title}</li>
//     <li>Movie Rating: {movie.vote_average}</li>
//     <li>Synopsis: {movie.overview.split('.', 1)}</li>
//   </ul>
