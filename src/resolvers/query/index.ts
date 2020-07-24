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
  hello: (parent, args, context): string => {
    return "Hello World";
  },
  discover: async (parent, args): Promise<SearchResult[]> => {
    const url = getMovieDiscoverUrl(1);
    const { results } = await get(url);
    return results;
  },
  search: async (
    parent,
    { query }: QuerySearchArgs
  ): Promise<SearchResult[]> => {
    const url = getMovieSearchUrl(query);
    const { results } = await get(url);
    return results;
  },
  details: (parent, { movieId }: QueryDetailsArgs): Promise<FilmDetails> => {
    const url = getMovieDetailsUrl(movieId);
    return get(url);
  },
};

export default Query;
