// Action Reducer:

const initialState = {
  movies: [],
  hasResult: true,
  searchText: "",
  movieDetails: null,
  movieId: null
}

const movies = (state = initialState, action) => {

  switch ( action.type) {
    
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.movies,
        hasResult: action.hasResult,
        searchText: action.searchText
      };

    case 'SELECT_MOVIE_SUCCESS':
      return {
        ...state,
        movieDetails: action.movieDetails
      }

    case 'SET_MOVIE_ID':
      return {
        ...state,
        movieId: action.movieId
      }

    default:
      return state;
  }
  
}

export default movies;