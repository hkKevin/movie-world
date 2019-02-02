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
        fetchedMovies.push( response.data.results[key] )
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

export const selectMovie = (movieId) => {
  return dispatch => {
    if (movieId === null || movieId === '') { return; }   // Return when movieId not found
    axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US')
      .then(response => {
        console.log(response.data);
        dispatch(selectMovieSuccess(response.data))
      })
      .catch(error => {
        console.error(error);
      })
  };
};

export const selectMovieSuccess = (movieDetails) => {
  return {
    type: 'SELECT_MOVIE_SUCCESS',
    movieDetails: movieDetails
  };
};