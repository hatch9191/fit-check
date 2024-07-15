import {
  IGetUserByEmailQueryVariables,
  IGetUserByIdQueryVariables,
  IMutationCreateUserArgs,
  IUser,
} from "@/graphql/codegen/codegen_rq";
import { Context } from "@/server/context/types";
import { createUser } from "@/server/modules/user/createUser";
import { getUserByEmail } from "@/server/modules/user/getUserByEmail";
import { getUserById } from "@/server/modules/user/getUserById";

export const userResolvers = {
  Query: {
    getUserById: async (
      _root: unknown,
      args: IGetUserByIdQueryVariables,
      ctx: Context
    ): Promise<IUser | null> => {
      return getUserById(ctx.prisma, args);
    },
    getUserByEmail: async (
      _root: unknown,
      args: IGetUserByEmailQueryVariables,
      ctx: Context
    ): Promise<IUser | null> => {
      return getUserByEmail(ctx.prisma, args);
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
