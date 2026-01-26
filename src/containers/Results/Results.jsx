import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";

import { selectMoviesData } from "../../components/moviesSelector";
import "./Results.css";
import * as actions from "../../store/action/index";
import Header from "../../components/Header/Header";
import Search from "../Search/Search";
import Footer from "../../components/Footer/Footer";
import JumpToTop from "../../components/JumpToTop/JumpToTop";
import ResultsPagination from "../../components/ResultsPagination/ResultsPagination";
import Spinner from "../../components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { createSlug } from "../../utils/slugify";

const Movies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    movies,
    hasResult,
    searchText,
    totalPages,
    currentPage,
    loading,
  } = useSelector(selectMoviesData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onPageChange = (page) => {
    dispatch(actions.selectPage(page, searchText));
  };

  const movieClicked = (movieId, movieTitle) => {
    if (movieId) {
      const movieSlug = createSlug(movieTitle)
      // const movieSlug = movieTitle?.toLowerCase()
      //                              .trim()
      //                              .replace(/&/g, 'and')        // & → and
      //                              .replace(/'/g, '')           // Remove apostrophes
      //                              .replace(/[^\w\s-]/g, '')    // Remove special chars
      //                              .replace(/\s+/g, '-')        // Spaces → hyphens
      //                              .replace(/-+/g, '-')         // Multiple hyphens → single
      //                              .replace(/^-+|-+$/g, '');    // Remove leading/trailing hyphens
      // console.log('movieSlug', movieSlug)
      // console.log("movieId", movieId);
      dispatch(actions.selectMovie(movieId));
      navigate(`/movie/${movieId}/${movieSlug}`);
    }
  };

  const keyClicked = (movieId, movieTitle, event) => {
    if (event.key === "Enter" || event.key === ' ') {
      event.preventDefault()
      if (movieId) {
        const movieSlug = createSlug(movieTitle)
        dispatch(actions.selectMovie(movieId));
        navigate(`/movie/${movieId}/${movieSlug}`);
      }
    }
  };

  const imgSrc = "https://image.tmdb.org/t/p/w185";
  const imgNotFoundSrc =
    "https://dummyimage.com/185x278/595959/ffffff.png&text=";

  let introText = null;
  let hasResultOrNot = null;
  let searchResults = null;
  let resultsPagination = null;

  if (!searchText && !hasResult) {
    introText = (
      <div id="intro-text">
        <h3>Let's explore millions of movies.</h3>
      </div>
    );
  }

  if (searchText && !hasResult && !loading) {
    hasResultOrNot = (
      <div id="has-result-or-not">
        <h3>No Search Results Found</h3>
        <p>There are no movies that matched "{searchText}".</p>
      </div>
    );
  } 

  if (searchText.trim()) {
    if (loading) {
      searchResults = <Spinner />;
    } else {
      searchResults = (
        <section className="grid">
          <div id="movies-container-grid">
            {movies
              ?.map((movie) => (
                <Fade key={movie.id}>
                  <div className="movie">
                    {movie.vote_count <= 50 ? ( // Prevent showing the details of inappropriate movies
                      <img
                        src={imgNotFoundSrc + movie.title}
                        alt={`Poster of "${movie.title}" unavailable`}
                        loading="lazy"
                        style={{cursor: "not-allowed"}}
                        data-tooltip-id="img-tooltip"
                        data-tooltip-content="Movie unavailable"
                        data-tooltip-place="top"
                        data-tooltip-delay-hide={100}
                        data-tooltip-variant="light"
                      />
                    ) :movie.poster_path ? (
                      <img
                        onClick={() => movieClicked(movie.id, movie.title)}
                        onKeyDown={e => keyClicked(movie.id, movie.title, e)}
                        src={imgSrc + movie.poster_path}
                        alt={`Poster of "${movie.title}"`}
                        loading="lazy"
                        role="button"
                        tabIndex={0}
                        data-tooltip-id="img-tooltip"
                        data-tooltip-content={movie.title}
                        data-tooltip-place="top"
                        data-tooltip-delay-hide={100}
                        data-tooltip-variant="light"
                      />
                    ) : !movie.poster_path ? (
                      <img
                        onClick={() => movieClicked(movie.id, movie.title)}
                        onKeyDown={e => keyClicked(movie.id, movie.title, e)}
                        src={imgNotFoundSrc + movie.title}
                        alt={`Poster of "${movie.title}" not found`}
                        loading="lazy"
                        role="button"
                        tabIndex={0}
                        data-tooltip-id="img-tooltip"
                        data-tooltip-content={movie.title}
                        data-tooltip-place="top"
                        data-tooltip-delay-hide={100}
                        data-tooltip-variant="light"
                      />
                    ) :  null}
                  </div>
                </Fade>
              ))}
          </div>
        </section>
      );
    }
  }

  if (movies?.length > 0 && hasResult && !loading) {
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
      <Tooltip id="img-tooltip" className="tooltip" />
      <Header />
      {introText}
      <Search />
      {searchResults}
      {hasResultOrNot}
      {resultsPagination}
      <JumpToTop />
      <Footer />
    </div>
  );
};

export default Movies;
