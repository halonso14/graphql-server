import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import personSchema from './schema';
import personResolver from './resolver';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: personSchema,
  rootValue: personResolver,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');