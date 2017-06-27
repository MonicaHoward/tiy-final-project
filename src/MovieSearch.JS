import React from 'react';

const url = `https://image.tmdb.org/t/p/w500`;


class MovieSearch extends React.Component {
  constructor(props) {
    super(props);
    

  }


  render() {
    let displayThis;
    if (this.props.allMovieData.length > 0) {
      displayThis = this.props.allMovieData.map((movie) => {
        return (
          <ul className="search-results" key={this.propsmovie.id}>
            <div className="box-header">
            </div>
            <li className="movie-poster"><img src={`${url}${this.props.movie.poster_path}`} alt={this.propsmovie.title} /></li>
            <div className="movie-info">
              <li className="movie-title">{this.props.movie.title}</li>
              <li>Movie Rating: {this.props.movie.vote_average}</li>
              <li>Synopsis: {this.props.movie.overview.split('.', 1)}</li>
            </div>
          </ul>
        )
      });
    }

    return (
      <section className="basic-search-section">
        <div>
          <input type="text" className="basic-search"
            placeholder="enter movie title here"
            onChange={(evt) => this.props.handleChange(evt)}
            onKeyUp={(evt) => this.props.handleKeyUp(evt)}
            value={this.state.searchQuery}/>
        </div>
        <div>
          {displayThis}
        </div>


      </section>
    );
  }
}
export default MovieSearch;
