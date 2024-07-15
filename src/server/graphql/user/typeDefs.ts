import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type Query {
    getUserById(id: String!): User
    getUserByEmail(email: String!): User
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
  }

  type User {
    id: String!
    firstName: String
    lastName: String
    email: String!
    password: String
    bio: String
    profileName: String
    updatedAt: DateTime!
    createdAt: DateTime!
  }
`;
