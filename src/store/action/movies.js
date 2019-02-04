import axios from 'axios';

// Action Creators:

export const searchMovies = (searchText) => {

  return dispatch => {
    if (searchText === null || searchText === '') { return; }   // Return when user enter nothing
    const fetchedMovies = [];
    let hasResult = false;
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US&query='
      + searchText + '&page=1&include_adult=false')
      .then(response => {
        for (let key in response.data.results) {
          fetchedMovies.push(response.data.results[key])
        }
        if (fetchedMovies.length === 0) {
          dispatch(searchMoviesSuccess(fetchedMovies, hasResult, searchText));
        } else {
          hasResult = true;
          dispatch(searchMoviesSuccess(fetchedMovies, hasResult));
        }
        console.log(fetchedMovies);
      })
      .catch(error => {
        console.error(error);
      })
  };
};

export const searchMoviesSuccess = (fetchedMovies, hasResult, searchText) => {
  return {
    type: 'SEARCH_MOVIES_SUCCESS',
    movies: fetchedMovies,
    hasResult: hasResult,
    searchText: searchText
  };
}

export const setMovieId = (movieId) => {
  return {
    type: 'SET_MOVIE_ID',
    movieId: movieId
  };
}

export const selectMovie = (movieId) => {
  return dispatch => {
    if (movieId === null || movieId === '') { return; }   // Return when movieId not found
    dispatch(setMovieId(movieId));

    async function getMovieDetails() {
      try {
        const details = await axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US&append_to_response=images&include_image_language=en,null');
        dispatch(selectMovieSuccess(details.data));
      } catch (error) {
        console.error(error);
      }
    }

    async function getMovieCredits() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/' + movieId + '/credits?api_key=34af8294dab051e0d2dc34894beac01c');
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    // Two async. HTTP Requests
    getMovieDetails();
    getMovieCredits();

    // The normal approach for HTTP Request
    // axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US&append_to_response=images&include_image_language=en,null')
    //   .then(response => {
    //     console.log(response.data);
    //     dispatch(selectMovieSuccess(response.data))
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   })
  };
};

export const selectMovieSuccess = (movieDetails) => {
  return {
    type: 'SELECT_MOVIE_SUCCESS',
    movieDetails: movieDetails
  };
};
