import axios from 'axios';

// Action Creators:

export const searchMovies = (searchText) => {
  
  return dispatch => {
    if (searchText === null || searchText === '') { return; }   // Return when user enter nothing
    const fetchedMovies = [];
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US&query=' 
                + searchText + '&page=1&include_adult=false')
    .then(response => {
      for (let key in response.data.results) {
        fetchedMovies.push( response.data.results[key] )
      }
      dispatch(searchMoviesSuccess(fetchedMovies));
      console.log(fetchedMovies);
    })
    .catch(error => {
      console.error(error);
    })
  };
};

export const searchMoviesSuccess = (fetchedMovies) => {
  return {
    type: 'SEARCH_MOVIES_SUCCESS',
    movies: fetchedMovies
  };
}