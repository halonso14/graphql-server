import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { mflixUserSchema } from './graphql/schema';
import { mflixUserResolver } from './graphql/resolver';
import dbConnect from './models';
dbConnect();

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: mflixUserSchema,
  rootValue: mflixUserResolver,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');