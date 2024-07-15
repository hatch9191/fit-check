import { PrismaClient } from "@prisma/client";

import {
  IGetUserByEmailQueryVariables,
  IUser,
} from "@/graphql/codegen/codegen_rq";
import { handleError } from "@/helpers/errors/handleError";

export async function getUserByEmail(
  prisma: PrismaClient,
  args: IGetUserByEmailQueryVariables
): Promise<IUser | null> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: args.email,
      },
    });

    return user;
  } catch (error) {
    handleError("Could not get user", error);
  }
}
