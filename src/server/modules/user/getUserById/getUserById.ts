import { PrismaClient } from "@prisma/client";

import {
  IGetUserByIdQueryVariables,
  IUser,
} from "@/graphql/codegen/codegen_rq";
import { handleError } from "@/helpers/errors/handleError";

export async function getUserById(
  prisma: PrismaClient,
  args: IGetUserByIdQueryVariables
): Promise<IUser | null> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: args.id,
      },
    });

    return user;
  } catch (error) {
    handleError("Could not get user", error);
  }
}
