import { mergeTypeDefs } from "@graphql-tools/merge";

import { userTypeDefs } from "./user/typeDefs";
import { requestTypeDefs } from "./request/typeDefs";

export const typeDefs = mergeTypeDefs([userTypeDefs, requestTypeDefs]);
