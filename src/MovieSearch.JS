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


handleChange() {

}

handleKeyUp() {

}




  render() {
    let list;
    if (this.state.specificMovieData.length > 0) {
      list = this.state.specificMovieData.map((movie) => {

      });
    }
    return (
      <section className="basic-search-section">
        <input type="text" className="basic-search"
          onChange={(evt) => this.handleChange(evt)}
          onChange={(evt) => this.handleKeyUp(evt)}
          value={this.state.searchQuery}/>
      
        <ul>
          {list}
        </ul>
      </section>
    );
  }
}
module.exports = MovieSearch;
