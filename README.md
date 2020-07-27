# videonet-api

This is a repository for the Videonet web application, which is originally a challenge application.

The application is currently deployed via AWS Lambda and API Gateway at https://qm8cskstge.execute-api.ap-southeast-2.amazonaws.com/dev/.

## Justification

I decided to create this GraphQL API for a few reasons.
Firstly, I didn't want to expose my TMDB API key in a client application.

Secondly, I thought of the typical client's context. It's unclear what kind of devices will be consuming this API and the information they'll actually require, so I decided to create a GraphQL wrapper for TMDB's REST API, in order to allow the client to decide on the information they desire. I feel that it's important to afford such flexibility to clients with less resources than your typical desktop/laptop, such as mobile devices.

## Technology

The Videonet API is built with the following technologies

- [Node v14.5](https://nodejs.org/en/docs/)
- [Typescript](https://www.typescriptlang.org/docs/home)
- [GraphQL Yoga](https://github.com/prisma-labs/graphql-yoga)
- [Serverless Framework](https://www.serverless.com/framework/docs/)

## Installation Instructions

- Clone the project with `git clone url`
- Enter the project directory via `cd videonet-api`
- Install dependencies via `yarn install`
- Obtain an API key via the instructions below
- Execute `yarn dev` to start the project via the `serverless offline` plugin
- Open `GraphQL Playground` at [http://localhost:4000/dev](http://localhost:4000/dev)

## API Key

Please Note: Before you can proceed with running the project, it's crucial that you have a TMDB API key. I won't be supplying my own, due to security reasons, but you can grab one by following these steps:

- Sign up to TMDB [https://www.themoviedb.org/signup](https://www.themoviedb.org/signup)
- Click on your profile widget, and select _settings_
- Click on _API_ in the left hand navigation pane
- Copy the key under _API Key (v3 auth)_
- Open the `videonet-api` project in your preferred source code editor
- Create a `.env` file
- Add the following key and value pair: `TMDB_API_KEY=<your api key>`

## CI/CD

The API leverages Github Actions for its CI/CD pipeline. Any commits pushed to the staging branch will trigger a deployment to `AWS Lambda` and `API Gateway`.

## TODO

There are quite a few things I would have liked to implement to polish up this API. Some examples are adding integration tests for each of the query resolvers, and some unit tests for utilities.

Other examples would be proper error handling, via an error handler middleware, to prevent unexpected errors from being addressed to the client.

## Query Examples

The following are some examples of queries you can execute:

### Search

_Without search query, will discover movies..._

```
query {
  search {
    page
    total_pages
    total_results
    results {
    id
    title
    poster_path
    }
  }
}
```

_With search query, will filter movies..._

```
query {
  search(query: "scooby doo") {
    page
    total_pages
    total_results
    results {
    id
    title
    poster_path
    }
  }
}
```

_With paging option, will return the specific page of results..._

```
query {
  search(query: "scooby doo", filter: { page: 3 }) {
    page
    total_pages
    total_results
    results {
    id
    title
    poster_path
    }
  }
}
```

### Details

```
query {
  details(movieId: 5) {
    id
    title
    poster_path
  }
}
```
