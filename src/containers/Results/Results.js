import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'
import Fade from 'react-reveal/Fade';

import './Results.css';
import * as actions from '../../store/action/index';
import Header from '../../components/Header/Header';
import Search from '../../containers/Search/Search';
import Footer from '../../components/Footer/Footer';
import JumpToTop from '../../components/JumpToTop/JumpToTop';
import ResultsPagination from '../../components/ResultsPagination/ResultsPagination';
import Spinner from '../../components/Spinner/Spinner';

class Movies extends Component {

  componentDidMount() {
    // Jump to top
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  onPageChange = (page) => {
    this.props.onPageChanged(page, this.props.searchText);
    // console.log(page);
  }

  movieClicked = movieId => {
    // console.log(movieId);
    this.props.onMovieSelected(movieId);
    this.props.history.push('/movie-world/movie');
  }

  render() {

    const imgSrc = 'https://image.tmdb.org/t/p/w185';
    const imgNotFoundSrc = 'https://dummyimage.com/185x278/595959/ffffff.png&text=';
    let hasResultOrNot = null;
    let searchResults = null;
    let resultsPagination = null;

    // Notify users when movie not found
    if ( this.props.searchText && !this.props.hasResult ) {
      if (!this.props.loading) {
        hasResultOrNot = (
          <div id='has-result-or-not'>
            <h3>NO SEARCH RESULTS FOUND</h3>
            <p>There are no movies that matched "{this.props.searchText}".</p>
          </div>
        )
      }
    }
    
    // Show movie results only if user enter movie name (search text)
    if ( this.props.searchText !== null || this.props.searchText !== '' ) {
      if (this.props.loading) {
        searchResults = (
          <Spinner />
        );
      } else {
        searchResults = (
          <section className='grid'>
            <div id='movies-container-grid'>

              {this.props.fetchedMovies.map(movie => (
                <div key={movie.id}>
                  <Fade>
                    <div className='movie' onClick={() => { this.movieClicked(movie.id) }}>
                      {movie.poster_path
                        ? <img src={imgSrc + movie.poster_path} data-tip={movie.title} alt={'Poster of "' + movie.title + '"'} />
                        : <img src={imgNotFoundSrc + movie.title} data-tip={movie.title} alt={'Poster of "' + movie.title + '" not found'} />}
                    </div>
                  </Fade>
                </div>
              ))}

            </div>
          </section>
        );
      }
    }

    // Show pagination
    if ( this.props.fetchedMovies.length !== 0 ) {
      resultsPagination = (
        <ResultsPagination
          onChange={this.onPageChange}
          currentPage={this.props.currentPage}
          totalPages={this.props.totalPages>1000 ? 1000 : this.props.totalPages} />
      );
    }

    return (
      <div>
        <ReactTooltip effect="solid" className='tooltip' type="light" />
        <Header />
        <Search />
        {resultsPagination}
        {searchResults}
        {hasResultOrNot}
        {resultsPagination}
        <JumpToTop />
        <Footer />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    fetchedMovies: state.movies,
    hasResult: state.hasResult,
    searchText: state.searchText,
    totalResults: state.totalResults,
    totalPages: state.totalPages,
    initialPage: state.initialPage,
    searchFinished: state.searchFinished,
    currentPage: state.currentPage,
    loading: state.loading
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onMovieSelected: (movieId) => dispatch(actions.selectMovie(movieId)),
    onPageChanged: (page, searchText) => dispatch(actions.selectPage(page, searchText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);