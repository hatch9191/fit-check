import { vi } from "vitest";

import { createPrismaClient } from "../prisma/createPrismaClient";
import { Context, InitialContext } from "@/server/context/types";

vi.mock("@/server/prisma/createPrismaClient");

export function createMockContext(): Context {
  const initialContext = {} as InitialContext;

  return {
    ...initialContext,
    prisma: createPrismaClient(),
  };
}
