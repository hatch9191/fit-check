import { mergeTypeDefs } from "@graphql-tools/merge";

import { requestTypeDefs } from "./request/typeDefs";
import { scalarTypeDefs } from "./scalar/typeDefs";
import { userTypeDefs } from "./user/typeDefs";

export const typeDefs = mergeTypeDefs([
  userTypeDefs,
  requestTypeDefs,
  scalarTypeDefs,
]);
