import { createSelector } from 'reselect';

const selectMovieDetails = (state) => state.movieDetails;
const selectMovieId = (state) => state.movieId;
const selectCredits = (state) => state.credits;
const selectReviews = (state) => state.reviews;
const selectVideos = (state) => state.videos;

export const selectMovieData = createSelector(
  [selectMovieDetails, selectMovieId, selectCredits, selectReviews, selectVideos],
  (movieDetails, movieId, credits, reviews, videos) => ({
    movieDetails,
    movieId,
    credits,
    reviews,
    videos
  })
);
