import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Movie.css';
import Header from '../Header/Header';

class Movie extends Component {
  render() {

    let movieInfo = null;
    if (this.props.info) {
      movieInfo = (
        <div>
          <h1>{this.props.info.original_title}</h1>
          <p>Movie ID: {this.props.info.id}</p>
        </div>
      );
    } else {
      movieInfo = null;
    }


    return (
      <div>
        <Header />
        {movieInfo}
      </div>
    );
  }


};

export const mapStateToProps = state => {
  return {
    info: state.movieDetails
  };
};

export default connect(mapStateToProps, null)(Movie);