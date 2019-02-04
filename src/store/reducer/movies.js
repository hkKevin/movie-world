// Action Reducer:

const initialState = {
  movies: [],
  hasResult: true,
  searchText: "",
  movieDetails: null,
  movieId: null,
  credits: null,
  reviews: null
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
      
    case 'GET_CREDITS_SUCCESS':
      return {
        ...state,
        credits: action.credits
      }

    case 'GET_REVIEWS_SUCCESS':
      return {
        ...state,
        reviews: action.reviews
      }

    default:
      return state;
  }
  
}

export default movies;