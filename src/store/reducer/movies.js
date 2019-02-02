// Action Reducer:

const initialState = {
  movies: [],
  hasResult: true,
  searchText: "",
  movieDetails: null
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

    default:
      return state;
  }
  
}

export default movies;