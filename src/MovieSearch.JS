import React from 'react';
import $ from 'jquery'

const url = `https://image.tmdb.org/t/p/w500`;

class MovieSearch extends React.Component {
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
        console.log("whooooooo",data);
      });
    }
  }

  render() {
    console.log('whats my data???????', this.state.allMovieData)
    let displayThis;
    if (this.state.allMovieData.length > 0) {

      displayThis = this.state.allMovieData.map((movie) => {
        console.log(`${url}${movie.poster_path}`);
        return (

          <ul className="search-results" key={movie.id}>
            <div className="box-header">
            </div>

            <div className="movie-poster">
              <ul>
              <li><img src={`${url}${movie.poster_path}`} alt={movie.title} /></li>
              </ul>
            </div>

            <div className="movie-info">
              <li className="movie-title">{movie.title.slice(0, 17)}</li>
              <li className="rating"
                  >Movie Rating: {movie.vote_average}</li>
              <li>Synopsis: {movie.overview.slice(0, 100) + '...'}</li>
            </div>

          </ul>

        )
      });
    }
    return (
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
    );
  }
}
export default MovieSearch;
