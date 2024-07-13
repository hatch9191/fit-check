import { PrismaClient } from "@prisma/client";
import { beforeEach } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";

let prismaMock: PrismaClient;

beforeEach(() => {
  mockReset(prismaMock);
});

export const createPrismaClient = (): PrismaClient => {
  prismaMock = mockDeep<PrismaClient>() as unknown as PrismaClient;

  return prismaMock;
};
