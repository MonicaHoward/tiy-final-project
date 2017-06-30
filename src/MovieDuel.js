import React from 'react';
import MovieSearch from './MovieSearch.js';
import $ from 'jquery';

const url = `https://image.tmdb.org/t/p/w500`;

class MovieDuel extends React.Component {
  constructor() {
    super();
    this.state = {
      allMovieData: [],
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

      });
    }
  }

  render() {
    let displayThis;
    if (this.state.allMovieData.length > 0) {

      displayThis = this.state.allMovieData[0]
        
        return (

          <ul className="duel-container"
              key={displayThis.id}>

            <div className="duel-movie-poster">
              <ul>
              <li><img src={`${url}${displayThis.poster_path}`} alt={displayThis.title} /></li>
              </ul>
            </div>

            <div className="duel-movie-info">
              <li className="duel-movie-title">{displayThis.title}</li>
              <li className="score"
                  >score <br /> {displayThis.vote_average}</li>
            </div>

          </ul>

        )

    }

    return (
      <div>
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


      </div>
    )
  }
}
export default MovieDuel;
