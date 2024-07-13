import { PrismaClient, User } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

import { User as UserArgs } from "../../../graphql/user/types";

export async function createUser(
  prisma: PrismaClient,
  args: UserArgs
): Promise<User> {
  return prisma.user.create({
    data: {
      id: uuidv4(),
      ...args,
    },
  });
}
