import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movies extends Component {
  render () {
    return (
      <div>
        {this.props.fetchedMovies.map( movie => (
          <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    fetchedMovies: state.movies
  };
};

export default connect(mapStateToProps, null)(Movies);