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

class Movies extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  onChange = (page) => {
    this.props.onPageChanged(page, this.props.searchText);
    // console.log(page);
  }

  movieClicked = movieId => {
    // console.log(movieId);
    this.props.onMovieSelected(movieId);
    this.props.history.push('/movie');
  }

  render() {

    const imgSrc = 'https://image.tmdb.org/t/p/w185';
    const imgNotFiundSrc = 'https://dummyimage.com/185x278/595959/ffffff.png&text=';

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
        <ReactTooltip effect="solid" className='tooltip' type="light" />
        <Header />
        <Search />

        {this.props.fetchedMovies.length !== 0
          ? (
            <ResultsPagination
              onChange={this.onChange}
              currentPage={this.props.currentPage}
              totalPages={this.props.totalPages>1000 ? 1000 : this.props.totalPages} />
          )
          : null}

        <section className='grid'>
          <div id='movies-container-grid'>
            {this.props.fetchedMovies.map(movie => (
              <div key={movie.id}>
                <Fade>
                  <div className='movie' onClick={() => { this.movieClicked(movie.id) }}>
                    {movie.poster_path
                      ? <img src={imgSrc + movie.poster_path} data-tip={movie.title} alt={'Poster of "' + movie.title + '"'} />
                      : <img src={imgNotFiundSrc + movie.title} data-tip={movie.title} alt={'Poster of "' + movie.title + '" not found'} />}
                  </div>
                </Fade>
              </div>
            ))}
          </div>


          {hasResultOrNot}
        </section>

        {this.props.fetchedMovies.length !== 0
          ? (
            <ResultsPagination
              onChange={this.onChange}
              currentPage={this.props.currentPage}
              totalPages={this.props.totalPages>1000 ? 1000 : this.props.totalPages} />
          )
          : null}

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
    currentPage: state.currentPage
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onMovieSelected: (movieId) => dispatch(actions.selectMovie(movieId)),
    onPageChanged: (page, searchText) => dispatch(actions.selectPage(page, searchText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);