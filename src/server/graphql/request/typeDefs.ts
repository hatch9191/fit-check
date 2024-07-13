import { gql } from "graphql-tag";

export const requestTypeDefs = gql`
  type Query {
    hello: String!
  }
`;
