import { buildSchema } from 'graphql';

const mflixCommentSchema = buildSchema(`
  type Comment {
    id: ID!,
    name: String!,
    email: String!,
    movie_id: ID!
    text: String!,
    date: Date!
  }

  type Query {
    getComment: Comment
  }
`);

export default mflixCommentSchema;