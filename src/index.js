import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { UserSchema } from './graphql/schema';
import { UserResolver } from './graphql/resolver';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: UserSchema,
  rootValue: UserResolver,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');