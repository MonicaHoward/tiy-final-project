import React from 'react';
import $ from 'jquery';



class MovieSearch extends React.Component {

  constructor() {
    super();
    this.state = {
      allMovieData: [],
      specificMovieData: [],
      searchQuery: ''
    }
  }

  componentDidMount() {

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
    console.log('whats my data???????', this.state.allMovieData[0])
    let displayThis;
    if (this.state.allMovieData.length > 0) {
      console.log('here');
      displayThis = this.state.allMovieData.map((movie) => {
        return (

          <ul className="search-results" key={movie.id}>
            <div className="box-header">
            </div>
            <li className="movie-poster"><img src={'https://api.themoviedb.org/3/configuration?api_key=dec457859cd32502859fced3c3ca8ede${movie.id.poster_path'} alt={"movie.title"} /></li>
            <li>{movie.title}</li>
            <li>Movie Rating: {movie.vote_average}</li>
            <li>Synopsis: {movie.overview}</li>
          </ul>

        )
      });
    }
    return (
      <section className="basic-search-section">
        <input type="text" className="basic-search"
          placeholder="enter movie title here"
          onChange={(evt) => this.handleChange(evt)}
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          value={this.state.searchQuery}/>
          {displayThis}

      </section>
    );
  }




// poster_url:
// `https://api.themoviedb.org/3/configuration?api_key=dec457859cd32502859fced3c3ca8ede${this.state.poster_path}`


  // searchQuery() {
  //   const url = `https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query`;
  //   console.log('whats this?', url);
  //
  //   $.ajax({
  //     url: url
  //   })
  //
  //   .done((data) => {
  //     console.log(data);
  //     movieData = data.results.map((movie) => {
  //       return {
  //         moviePoster: movie.url,
  //         movieName: movie.name,
  //         movieRating: movie.vote_average
  //       }
  //     });
  //   })
  // }

}
export default MovieSearch;
