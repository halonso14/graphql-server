import { buildSchema } from 'graphql';

const UserSchema = buildSchema(`
  type User {
    _id: ID!,
    name: String!,
    email: String!,
    password: String!
  }

  type Query {
    getAllUsers: [User]!
    getUserByName(name: String!): User
  }
`);

export default UserSchema;