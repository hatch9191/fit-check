import { createYoga } from "graphql-yoga";
import { NextApiRequest, NextApiResponse } from "next";

import { createContext } from "@/server/context/createContext";
import { schema } from "@/server/graphql/schema";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  graphqlEndpoint: "/api/graphql",
  context: createContext,
});
