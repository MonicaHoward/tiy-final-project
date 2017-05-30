import React from 'react';
import $ from 'jquery';

const url = `https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=`;

class MovieRandomizer extends React.Component {

  constructor() {
    super();
    this.state = {
      allMovieData: [],
      randomMovie: [],
      movieId: Math.ceil(Math.random() * 300)
    }
  }

  handleClick(evt) {
      $.ajax({
        url:  `https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=${this.state.randomMovie}`,
      })

      .done((data) => {
        this.setState({
          randomMovie: data.results.movieId
        })
        console.log("hellooooo data",data);
      });
  }


  render() {
    console.log("random?", this.state)
    let displayRandom = this.state.allMovieData.map((movie) => {
      return (
        <div>
          {displayRandom}
        </div>
      )
    });
    return (
      <section className="movie-randomizer">
        <button onClick={(evt) => this.handleClick(evt)}>PUSH FOR RANDOM MOVIE</button>
        <h1>-OR-< br />CHOOSE A GENRE</h1>
        <button>ACTION</button>
        <button>COMEDY</button>
        <button>HORROR</button>
      </section>
    )
  }
}

export default MovieRandomizer;
