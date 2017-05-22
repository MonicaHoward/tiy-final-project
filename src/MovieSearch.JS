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

  $.ajax({
    url: 'https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=goodfellas'
  })

  .done((data) => {
    console.log(data);
    const movieData = data.results.map((movie) => {
      return {
        moviePoster: movie
      }
    });
  })


  }
  render() {
    return (
      <section>
        <input type="text" />
        <ol>
        </ol>
      </section>
    );
  }
}
module.exports = MovieSearch;
