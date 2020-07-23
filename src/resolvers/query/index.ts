import { get } from "../../utils/fetch";
import { 
  getMovieDiscoverUrl, 
  getMovieSearchUrl, 
  getMovieDetailsUrl 
} from "../../utils/urls";

const Query = {
    hello: (parent, args, context) => {
        return "Hello World";
    },
    discover: async (parent, args, context) => {
      const url = getMovieDiscoverUrl(1);
      const { results } = await get(url);
      return results;

    },
    search: async (parent, { query }, context) => {
      const url = getMovieSearchUrl(query);
      const { results } = await get(url);
      return results;
    },
    details: (parent, { movieId }, context) => {
      const url = getMovieDetailsUrl(movieId);
      return get(url);
    }
}

export default Query;