import { get } from "../../utils/fetch";
import {
  getMovieDiscoverUrl,
  getMovieSearchUrl,
  getMovieDetailsUrl,
} from "../../utils/urls";
import {
  SearchResult,
  QuerySearchArgs,
  QueryDetailsArgs,
  FilmDetails,
} from "../../generated/types";

const Query = {
  search: async (
    parent,
    { query, filter }: QuerySearchArgs
  ): Promise<SearchResult[]> => {
    const url = query ? getMovieSearchUrl(query, filter) : getMovieDiscoverUrl(filter);
    const { results } = await get(url);
    return results;
  },
  details: (parent, { movieId }: QueryDetailsArgs): Promise<FilmDetails> => {
    const url = getMovieDetailsUrl(movieId);
    return get(url);
  },
};

export default Query;
