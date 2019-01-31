import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Movies.css';
import Movie from '../../components/Movie/Movie';

class Movies extends Component {
  render() {

    let hasResultOrNot = this.props.hasResult 
      ? null 
      : ( 
        <div id='has-result-or-not'>
          <h3>NO SEARCH RESULTS FOUND</h3> 
          <p>There are no movies that matched your query.</p>
        </div>
      ) 

    return (
      <section className='grid'>
        <div id='movies-container-grid'>
          {this.props.fetchedMovies.map(movie => (
            <div key={movie.id}>
              <Movie
                // id={movie.id}
                title={movie.title}
                poster={movie.poster_path} />
            </div>

          ))}
          
        </div>
        {hasResultOrNot}
      </section>
    );
  }
}

export const mapStateToProps = state => {
  return {
    fetchedMovies: state.movies,
    hasResult: state.hasResult
  };
};

export default connect(mapStateToProps, null)(Movies);