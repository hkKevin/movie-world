import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import ReactTooltip from 'react-tooltip';
// import Fade from 'react-reveal/Fade';

import './Results.css';
import * as actions from '../../store/action/index';
import Header from '../../components/Header/Header';
import Search from '../Search/Search';
import Footer from '../../components/Footer/Footer';
import JumpToTop from '../../components/JumpToTop/JumpToTop';
import ResultsPagination from '../../components/ResultsPagination/ResultsPagination';
import Spinner from '../../components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    fetchedMovies,
    hasResult,
    searchText,
    totalPages,
    currentPage,
    loading
  } = useSelector(state => ({
    fetchedMovies: state.movies,
    hasResult: state.hasResult,
    searchText: state.searchText,
    totalPages: state.totalPages,
    currentPage: state.currentPage,
    loading: state.loading
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   ReactTooltip.rebuild();
  // });

  const onPageChange = (page) => {
    dispatch(actions.selectPage(page, searchText));
  };

  const movieClicked = (movieId) => {
    dispatch(actions.selectMovie(movieId));
    navigate('/movie-world/movie');
  };

  const imgSrc = 'https://image.tmdb.org/t/p/w185';
  const imgNotFoundSrc = 'https://dummyimage.com/185x278/595959/ffffff.png&text=';

  let hasResultOrNot = null;
  let searchResults = null;
  let resultsPagination = null;

  if (searchText && !hasResult && !loading) {
    hasResultOrNot = (
      <div id="has-result-or-not">
        <h3>NO SEARCH RESULTS FOUND</h3>
        <p>There are no movies that matched "{searchText}".</p>
      </div>
    );
  }

  if (searchText) {
    if (loading) {
      searchResults = <Spinner />;
    } else {
      searchResults = (
        <section className="grid">
          <div id="movies-container-grid">
            {fetchedMovies.map(movie => (
              <div key={movie.id}>
                {/* <Fade> */}
                  <div className="movie" onClick={() => movieClicked(movie.id)}>
                    {movie.poster_path
                      ? <img src={imgSrc + movie.poster_path} data-tip={movie.title} alt={`Poster of "${movie.title}"`} />
                      : <img src={imgNotFoundSrc + movie.title} data-tip={movie.title} alt={`Poster of "${movie.title}" not found`} />}
                  </div>
                {/* </Fade> */}
              </div>
            ))}
          </div>
        </section>
      );
    }
  }

  if (fetchedMovies.length > 0) {
    resultsPagination = (
      <ResultsPagination
        onChange={onPageChange}
        currentPage={currentPage}
        totalPages={totalPages > 1000 ? 1000 : totalPages}
      />
    );
  }

  return (
    <div>
      {/* <ReactTooltip effect="solid" className="tooltip" type="light" /> */}
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
};

export default Movies;