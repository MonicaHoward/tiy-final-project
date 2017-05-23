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
    $.ajax({
      url: `https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=goodfellas +searchQuery`
    })
    .done((data) => {
      this.setState({
        allMovieData: data.results
      })
    });
  }


handleChange(evt) {
  this.setState({
    searchQuery: evt.target.value
  })
}

handleKeyUp(evt) {
  if (evt.keyCode === 13) {

    const specificData = [];
    for (var i = 0; i < this.state.specificMovieData.length; i++) {
      let movie = this.state.specificMovieData[i]
      if (movie.results.indexOf(this.state.searchQuery) > 1) {
        specificData.push(movie);
      }
    }
    this.setState({
      searchQuery: '',
      specificMovieData: specificData

    });
  }
}




  render() {
    let list;
    if (this.state.specificMovieData.length > 0) {
      list = this.state.specificMovieData.map((movie) => {
        return (
          <ul>
            <li>{movie.poster}</li>
            <li>{movie.title}</li>
            <li>{movie.vote_average}</li>
          </ul>
        )
      });
    }
    return (
      <section className="basic-search-section">
        <input type="text" className="basic-search"
          onChange={(evt) => this.handleChange(evt)}
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          value={this.state.searchQuery}/>

        <ul>
          {list}
        </ul>
      </section>
    );
  }

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
