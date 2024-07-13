import { mergeResolvers } from "@graphql-tools/merge";

import { userResolvers } from "./user/resolvers";
import { requestResolvers } from "./request/resolvers";

export const resolvers = mergeResolvers([userResolvers, requestResolvers]);
