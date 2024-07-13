import { mergeResolvers } from "@graphql-tools/merge";

import { requestResolvers } from "./request/resolvers";
import { scalarResolvers } from "./scalar/resolvers";
import { userResolvers } from "./user/resolvers";

export const resolvers = mergeResolvers([
  userResolvers,
  requestResolvers,
  scalarResolvers,
]);
