import { InitialContext, Context } from "./types";

import { createPrismaClient } from "../prisma/createPrismaClient";

export function createContext(initialContext: InitialContext): Context {
  return {
    ...initialContext,
    prisma: createPrismaClient(),
  };
}
