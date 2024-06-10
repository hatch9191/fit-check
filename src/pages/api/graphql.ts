import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";

import { serverConfig } from "../../server/apollo/server-config";

const apolloServer = new ApolloServer(serverConfig);

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}
