import { buildSchema } from 'graphql';

const personSchema = buildSchema(`
  type Person {
    id: ID!,
    firstName: String!,
    lastName: String!,
    age: Int
  }

  type Query {
    getPerson: Person
  }
`);

export default personSchema;