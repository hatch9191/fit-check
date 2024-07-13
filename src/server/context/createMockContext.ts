import { vi } from "vitest";

import { Context, InitialContext } from "./types";

import { createPrismaClient } from "../../__mocks__/prisma/createPrismaClient";

vi.mock("../prisma/createPrismaClient");

export function createMockContext(): Context {
  const initialContext = {} as InitialContext;

  return {
    ...initialContext,
    prisma: createPrismaClient(),
  };
}
