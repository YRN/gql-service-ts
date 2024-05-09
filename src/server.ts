import { ApolloServer } from 'apollo-server';
import { tipeDefs } from './schema';
import { resolusi } from './resolvers';

const server = new ApolloServer({ typeDefs : tipeDefs, resolvers : resolusi });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});