import { PrismaClient, User } from "@prisma/client";

export async function getUser(prisma: PrismaClient): Promise<User | null> {
  return prisma.user.findFirst();
}
