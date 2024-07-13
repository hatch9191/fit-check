import { GraphQLSchema } from "graphql";
import { createSchema } from "graphql-yoga";

import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

export const schema: GraphQLSchema = createSchema({
  typeDefs,
  resolvers,
});
