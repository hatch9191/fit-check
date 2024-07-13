import { Context } from "../../context/types";
import { User } from "./types";
import { createUser } from "../../modules/user/createUser";
import { getUser } from "../../modules/user/getUser";

export const userResolvers = {
  Query: {
    getUser: async (
      _root: unknown,
      _args: unknown,
      ctx: Context
    ): Promise<User | null> => {
      return getUser(ctx.prisma);
    },
  },
  Mutation: {
    createUser: async (
      _root: unknown,
      args: User,
      ctx: Context
    ): Promise<User> => {
      return createUser(ctx.prisma, args);
    },
  },
};
