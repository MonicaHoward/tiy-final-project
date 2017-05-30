import React from 'react';
import $ from 'jquery';



class MovieRandomizer extends React.Component {

  constructor() {
    super();
    this.state = {
      allMovieData: [],
      randomMovie: [],
      movieId: ''
    }
  }
  randomizer() {
    this.setState ({
      randomMovie: Math.ceil(Math.random() * 9000)

    })

  }

  handleClick(evt) {
      $.ajax({
        url:  `https://api.themoviedb.org/3/search/movie?api_key=dec457859cd32502859fced3c3ca8ede&query=goodfellas`,
      })

      .done((data) => {
        this.setState({
          allMovieData: data.results
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
        <button onClick={(evt) => this.randomizer(evt)}>PUSH FOR RANDOM MOVIE</button>
        <h1>-OR-< br />CHOOSE A GENRE</h1>
        <button>ACTION</button>
        <button>COMEDY</button>
        <button>HORROR</button>
      </section>
    )
  }
}

export default MovieRandomizer;
