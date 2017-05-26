import React from 'react';
import $ from 'jquery';



class RightQuery extends React.Component {

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
        console.log("we got action?",data);
      });
    }



  }




  render() {
    console.log('right query results', this.state.allMovieData[0])
    let displayThis;
    if (this.state.allMovieData.length > 0) {
      console.log('here');
      displayThis = this.state.allMovieData.map((movie) => {
        return (
          <div className="duel-query">
            <ul className="duel-search-results" key={movie.id}>
              <div className="box-header">
              </div>
              <li className="movie-poster"><img src={'https://api.themoviedb.org/3/configuration?api_key=dec457859cd32502859fced3c3ca8ede${movie.id.poster_path'} alt={"movie.title"} /></li>
              <li>{movie.title}</li>
              <li>Movie Rating: {movie.vote_average}</li>
              <li>Synopsis: {movie.overview}</li>
            </ul>


          </div>

        )
      });
    }
    return (
      <section className="duel-query">
        <div className="main-content">
          <div className="box-header">
          </div>
          <input type="text" className="basic-search"
            placeholder="enter movie title here"
            onChange={(evt) => this.handleChange(evt)}
            onKeyUp={(evt) => this.handleKeyUp(evt)}
            value={this.state.searchQuery}/>
            {displayThis}
        </div>
        <div className="lets-duel">
          <h1>Let's Duel</h1>
        </div>
      </section>
    );
  }

}
export default RightQuery;
