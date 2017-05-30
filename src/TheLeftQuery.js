import React from 'react';
import $ from 'jquery';

const url = `https://image.tmdb.org/t/p/w500`;

class TheLeftQuery extends React.Component {

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
              <li className="movie-poster"><img src={`${url}${movie.poster_path}`} alt={"movie.title"} /></li>
              <li>{movie.title}</li>
              <li>Movie Rating: {movie.vote_average}</li>
              <li>Synopsis: {movie.overview}</li>
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
export default TheLeftQuery;
