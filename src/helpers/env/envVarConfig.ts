import { ensureString } from "@/utils/string";

export const envVarConfig = {
  publicGqlApiUrl: ensureString(
    "GRAPHQL_API_BASE_URI",
    process.env.GRAPHQL_API_BASE_URI
  ),
  postgresDbUrl: ensureString("POSTGRES_DB_URL", process.env.POSTGRES_DB_URL),
  nextAuthSecret: ensureString("NEXTAUTH_SECRET", process.env.NEXTAUTH_SECRET),
  nextAuthUrl: ensureString("NEXTAUTH_URL", process.env.NEXTAUTH_URL),
};
