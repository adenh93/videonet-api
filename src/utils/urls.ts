import { PagingInput } from "../generated/types";
import {
  MOVIE_DETAILS_URL,
  MOVIE_DISCOVER_URL,
  MOVIE_SEARCH_URL,
} from "../CONSTANTS";

export const getMovieDetailsUrl = (movieId: Number): string =>
  `${MOVIE_DETAILS_URL}/${movieId}?api_key=${process.env.TMDB_API_KEY}&include_adult=false`;

export const getMovieDiscoverUrl = (filter: PagingInput) => {
  let url = `${MOVIE_DISCOVER_URL}?api_key=${process.env.TMDB_API_KEY}&include_adult=false`;
  return applyPaging(url, filter);
}

export const getMovieSearchUrl = (query: string, filter: PagingInput): string => {
  let url = `${MOVIE_SEARCH_URL}?api_key=${process.env.TMDB_API_KEY}&query=${query}&include_adult=false`;
  return applyPaging(url, filter);
}

const applyPaging = (url: string, filter: PagingInput): string => {
  url += `&page=${filter.page}`;
  return url;
}