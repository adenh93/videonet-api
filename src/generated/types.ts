export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FilmDetails = {
  __typename?: 'FilmDetails';
  id: Scalars['Int'];
  title: Scalars['String'];
  budget: Scalars['Int'];
  genres: Array<Genre>;
  original_language: Scalars['String'];
  original_title: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  backdrop_path?: Maybe<Scalars['String']>;
  release_date: Scalars['String'];
  runtime?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  tagline?: Maybe<Scalars['String']>;
  vote_average: Scalars['Int'];
  vote_count: Scalars['Int'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type PagingInput = {
  page?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  search?: Maybe<Array<SearchResult>>;
  details: FilmDetails;
};


export type QuerySearchArgs = {
  query?: Maybe<Scalars['String']>;
  filter?: Maybe<PagingInput>;
};


export type QueryDetailsArgs = {
  movieId: Scalars['Int'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  id: Scalars['Int'];
  title: Scalars['String'];
  vote_average: Scalars['Int'];
  vote_count: Scalars['Int'];
  release_date: Scalars['String'];
  poster_path?: Maybe<Scalars['String']>;
  backdrop_path?: Maybe<Scalars['String']>;
};
