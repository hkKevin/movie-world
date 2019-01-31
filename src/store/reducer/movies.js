// Action Reducer:

const initialState = {
  movies: [],
  hasResult: true
}

const movies = (state = initialState, action) => {

  switch ( action.type) {
    
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.movies,
        hasResult: action.hasResult
      };

    default:
      return state;
  }
  
}

export default movies;