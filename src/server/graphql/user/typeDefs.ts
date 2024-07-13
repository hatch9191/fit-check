import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type Query {
    getUser: User
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!): User
  }

  type User {
    firstName: String!
    lastName: String!
    email: String!
  }
`;
