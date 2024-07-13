import { PrismaClient } from "@prisma/client";

let prismaClient: PrismaClient = null;

export function createPrismaClient(): PrismaClient {
  if (prismaClient) {
    return prismaClient;
  }

  prismaClient = new PrismaClient();

  return prismaClient;
}
