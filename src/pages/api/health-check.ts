import { NextApiHandler } from "next";

const handler: NextApiHandler = (_req, res) => {
  res.setHeader("Cache-control", "no-cache");
  res.write("OK");
  res.end();
};

export default handler;
