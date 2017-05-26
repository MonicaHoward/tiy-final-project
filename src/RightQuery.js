import React from 'react';

class RightQuery extends React.Component {

  render() {
    return (
      <section className="duel-query">
        <div className="main-content">
          <div className="box-header">
            <h1>right</h1>
          </div>
            <input type="text" placeholder="Movie Title" className="search-query"/>
        </div>
      </section>
    );
  }
}
module.exports = RightQuery;
