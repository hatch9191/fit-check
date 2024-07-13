import { createPrismaClient } from "../prisma/createPrismaClient";
import { InitialContext, Context } from "./types";

export function createContext(initialContext: InitialContext): Context {
  return {
    ...initialContext,
    prisma: createPrismaClient(),
  };
}
