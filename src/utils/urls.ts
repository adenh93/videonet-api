import {
  MOVIE_DETAILS_URL,
  MOVIE_DISCOVER_URL,
  MOVIE_SEARCH_URL,
} from "../CONSTANTS";

export const getMovieDetailsUrl = (movieId: Number) =>
  `${MOVIE_DETAILS_URL}/${movieId}?api_key=${process.env.TMDB_API_KEY}&include_adult=false`;

export const getMovieDiscoverUrl = (genreId: number) =>
  `${MOVIE_DISCOVER_URL}?api_key=${process.env.TMDB_API_KEY}&with_genres=${genreId}&include_adult=false`;

export const getMovieSearchUrl = (query: string) =>
  `${MOVIE_SEARCH_URL}?api_key=${process.env.TMDB_API_KEY}&query=${query}&include_adult=false`;
