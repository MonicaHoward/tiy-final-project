import React from 'react';
import $ from 'jquery';

class MovieRandomizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: 'Any'
    };
    this.updateGenre = this.updateGenre.bind(this);
  }
  updateGenre(genre) {
    this.setState ({
      selectedGenre: genre
    });

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
    var genres = ['All', 'Action', 'Comedy', 'Horror'];

    return (
      <ul className='genres'>
        {genres.map(function(genre) {
          return (
            <li
              key={genre}
              onclick={this.updateGenre.bind(null, genre)}
              style={genre === this.state.selectedGenre ? {color: '#D00213'} :null}>
              <button>{genre}</button>
            </li>
          )
        }, this)}

      </ul>
    )

  }
}

export default MovieRandomizer;
