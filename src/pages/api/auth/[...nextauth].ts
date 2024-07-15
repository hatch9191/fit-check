import { compare, hash } from "bcrypt";
import { GraphQLClient } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import fs from "fs";
import path from "path";

import { envVarConfig } from "@/helpers/env/envVarConfig";
import { handleError } from "@/helpers/errors/handleError";

const graphQLClient = new GraphQLClient(envVarConfig.publicGqlApiUrl);

type BasicUser = {
  id: string;
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
};

type GetUserByEmail = {
  getUserByEmail: BasicUser;
};

type CreateUser = {
  createUser: BasicUser;
};

const GET_USER_BY_EMAIL_QUERY = fs.readFileSync(
  path.resolve(
    process.cwd(),
    "src/graphql/operations/queries/GetUserByEmail.gql"
  ),
  "utf8"
);

const CREATE_USER_MUTATION = fs.readFileSync(
  path.resolve(
    process.cwd(),
    "src/graphql/operations/mutations/CreateUser.gql"
  ),
  "utf8"
);

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, {
    providers: [
      Credentials({
        name: "Email",
        credentials: {
          email: {
            label: "Email",
            type: "email",
            placeholder: "john@email.com",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          try {
            if (!credentials) {
              throw new Error("Credentials missing. email and password needed");
            }

            const { email, password } = credentials;

            const { getUserByEmail: user } =
              await graphQLClient.request<GetUserByEmail>(
                GET_USER_BY_EMAIL_QUERY,
                { email }
              );

            if (!user) {
              const { createUser: createdUser } =
                await graphQLClient.request<CreateUser>(CREATE_USER_MUTATION, {
                  email,
                  password: await hash(password, 12),
                });

              return createdUser;
            }

            const isValid = await compare(password, user.password ?? "");

            if (!isValid) {
              throw new Error("Wrong credentials. Try again.");
            }

            return user;
          } catch (error) {
            console.error(error);
            handleError("Authentication error", error);
          }
        },
      }),
    ],
  });
}
