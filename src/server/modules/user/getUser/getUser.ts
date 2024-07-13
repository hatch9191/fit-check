import { PrismaClient } from "@prisma/client";

import { IGetUserQueryVariables, IUser } from "@/graphql/codegen/codegen_rq";
import { handleError } from "@/helpers/errors/handleError";

export async function getUser(
  prisma: PrismaClient,
  args: IGetUserQueryVariables
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
