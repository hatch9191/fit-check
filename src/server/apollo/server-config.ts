import { Config } from "apollo-server-micro";

import { resolvers } from "../graphql/resolvers";
import { schema } from "../graphql/schema";

export const serverConfig: Config = {
  schema,
  resolvers,
};
