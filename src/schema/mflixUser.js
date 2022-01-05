import { buildSchema } from 'graphql';

const mflixUserSchema = buildSchema(`
  type User {
    id: ID!,
    name: String!,
    email: String!,
    password: String!
  }

  type Query {
    getUser(id: ID!): User
  }
`);

export default mflixUserSchema;