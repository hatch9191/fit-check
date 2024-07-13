import { NextApiRequest, NextApiResponse } from "next";
import { createYoga } from "graphql-yoga";

import { schema } from "../../server/graphql/schema";
import { createContext } from "../../server/context/createContext";

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
