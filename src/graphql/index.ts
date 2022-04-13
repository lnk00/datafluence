/* eslint-disable import/no-unresolved */
import { graphqlHTTP } from 'koa-graphql';
import { buildSchema } from 'graphql';
import Schema from './schema.gql?raw';
import Resolvers from './resolvers';

export default graphqlHTTP({
  schema: buildSchema(Schema),
  rootValue: Resolvers,
  graphiql: true,
});
