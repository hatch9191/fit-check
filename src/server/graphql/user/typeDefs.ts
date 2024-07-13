import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type Query {
    getUser(id: String!): User
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!): User!
  }

  type User {
    id: String!
    firstName: String
    lastName: String
    email: String!
    bio: String
    profileName: String
    updatedAt: DateTime!
    createdAt: DateTime!
  }
`;
