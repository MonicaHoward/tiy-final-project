import React from 'react';
import $ from 'jquery';

class MovieDuel extends React.Component {
  constructor() {
    super();
    this.state = {
      opponentOne: '',
      opponentTwo: ''
    }
  }


  handleClick(evt) {

  }

  render() {
    console.log('*what is????!?!?!?!?!?*', this.props.displayThis)
    return (
      <section className="movie-duel">
        <div className="duel-outcome">
          <h1>The Winner Is: </h1>
        </div>

        <button className="lets-duel"
          onClick={(evt) => this.handleClick(evt)}>
          <h1>Let's Duel</h1>
        </button>

      </section>

    )
  }

}

export default MovieDuel;
