import {
  IGetUserQueryVariables,
  IMutationCreateUserArgs,
  IUser,
} from "@/graphql/codegen/codegen_rq";

import { Context } from "../../context/types";
import { createUser } from "../../modules/user/createUser";
import { getUser } from "../../modules/user/getUser";

export const userResolvers = {
  Query: {
    getUser: async (
      _root: unknown,
      args: IGetUserQueryVariables,
      ctx: Context
    ): Promise<IUser | null> => {
      return getUser(ctx.prisma, args);
    },
  },
  Mutation: {
    createUser: async (
      _root: unknown,
      args: IMutationCreateUserArgs,
      ctx: Context
    ): Promise<IUser> => {
      return createUser(ctx.prisma, args);
    },
  },
};
