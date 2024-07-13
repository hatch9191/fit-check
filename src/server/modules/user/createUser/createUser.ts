import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

import { IMutationCreateUserArgs, IUser } from "@/graphql/codegen/codegen_rq";
import { handleError } from "@/helpers/errors/handleError";

export async function createUser(
  prisma: PrismaClient,
  args: IMutationCreateUserArgs
): Promise<IUser> {
  try {
    const user = await prisma.user.create({
      data: {
        id: uuidv4(),
        ...args,
      },
    });

    return user;
  } catch (error) {
    handleError("Could not create user", error);
  }
}
