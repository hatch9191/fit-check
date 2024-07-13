import { PrismaClient } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { YogaInitialContext } from "graphql-yoga";

export type InitialContext = GraphQLResolveInfo & YogaInitialContext;

export type Context = InitialContext & {
  prisma: PrismaClient;
};
