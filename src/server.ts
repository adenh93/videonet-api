import { GraphQLServerLambda } from "graphql-yoga";
import resolvers from "./resolvers";

const {
    graphqlHandler,
    playgroundHandler,
    executableSchema
} = new GraphQLServerLambda({
    typeDefs: "./src/schema.graphql",
    resolvers
});

export { graphqlHandler, playgroundHandler, executableSchema };