import { createSelector } from 'reselect';

const selectMovies = (state) => state.movies;
const selectHasResult = (state) => state.hasResult;
const selectSearchText = (state) => state.searchText;
const selectTotalPages = (state) => state.totalPages;
const selectTotalResults = (state) => state.totalResults;
const selectCurrentPage = (state) => state.currentPage;
const selectLoading = (state) => state.loading;

export const selectMoviesData = createSelector(
  [selectMovies, selectHasResult, selectSearchText, selectTotalPages, selectTotalResults, selectCurrentPage, selectLoading],
  (movies, hasResult, searchText, totalPages, totalResults, currentPage, loading) => ({
    movies,
    hasResult,
    searchText,
    totalPages,
    totalResults,
    currentPage,
    loading
  })
);
