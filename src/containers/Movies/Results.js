import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Results.css';
import Header from '../../components/Header/Header';
import '../../components/Header/Header.css'
import Search from '../../containers/Search/Search';
import '../../containers/Search/Search.css';
import * as actions from '../../store/action/index';

class Movies extends Component {

  movieClicked = movieId => {
    console.log(movieId);
    this.props.onMovieSelected(movieId);
    this.props.history.push('/movie');
  }

  render() {

    const imgSrc = 'https://image.tmdb.org/t/p/w185';

    let hasResultOrNot = this.props.hasResult
      ? null
      : (
        <div id='has-result-or-not'>
          <h3>NO SEARCH RESULTS FOUND</h3>
          <p>There are no movies that matched "{this.props.searchText}".</p>
        </div>
      )

    return (
      <div>
        <Header />
        <Search />
        <section className='grid'>
          <div id='movies-container-grid'>
            {this.props.fetchedMovies.map(movie => (
              <div key={movie.id}>
                <div className='movie' onClick={() => { this.movieClicked(movie.id) }}>
                  { movie.poster_path 
                    ? <img src={imgSrc + movie.poster_path} title={movie.title} alt={'Poster of "' + movie.title + '"'} /> 
                    : <p>Poster of "{movie.title}" not found</p>}
                </div>
              </div>

            ))}

          </div>
          {hasResultOrNot}
        </section>
      </div>

    );
  }
}

export const mapStateToProps = state => {
  return {
    fetchedMovies: state.movies,
    hasResult: state.hasResult,
    searchText: state.searchText
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onMovieSelected: (movieId) => dispatch(actions.selectMovie(movieId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);