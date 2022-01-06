import { buildSchema } from 'graphql';

const mflixMovieSchema = buildSchema(`
  type Movie {
    id: ID!,
    plot: String!,
    genres: [String!]!,
    runtime: Int!,
    cast: [String!]!,
  }

  type Query {
    getMovie: [Movie]
  }
`);

export default mflixMovieSchema;