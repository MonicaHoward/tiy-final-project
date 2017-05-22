import React from 'react';
import $ from 'jquery';



class MovieSearch extends React.Component {

  constructor() {
    super();
    this.state = {
      leftQuery: "",
      rightQuery: "",
      movieSearch: "",
      theWinnerIs: ""
    }
  }

  searchQuery() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query`;
    console.log('whats this?', url);

    $.ajax({
      url: url
    })

    .done((data) => {
      console.log(data);
      const movieData = data.results.map((movie) => {
        return {
          moviePoster: movie.url,
          movieName: movie.name,
          movieRating: movie.vote_average
        }
      });
    })
  }


handleChange() {
    
}




  render() {
    return (
      <section>
        <input type="text" onChange={(evt) => this.handleChange()}></input>
        <ol>
        </ol>
      </section>
    );
  }
}
module.exports = MovieSearch;
