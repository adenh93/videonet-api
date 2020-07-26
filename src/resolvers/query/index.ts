import { get } from "../../utils/fetch";
import {
  getMovieDiscoverUrl,
  getMovieSearchUrl,
  getMovieDetailsUrl,
} from "../../utils/urls";
import {
  QuerySearchArgs,
  QueryDetailsArgs,
  FilmDetails,
  PaginatedResults,
} from "../../generated/types";

const Query = {
  search: async (
    parent,
    { query, filter }: QuerySearchArgs
  ): Promise<PaginatedResults> => {
    const url = query
      ? getMovieSearchUrl(query, filter)
      : getMovieDiscoverUrl(filter);
    return await get(url);
  },
  details: (parent, { movieId }: QueryDetailsArgs): Promise<FilmDetails> => {
    const url = getMovieDetailsUrl(movieId);
    return get(url);
  },
};

export default Query;
