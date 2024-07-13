import { ensureString } from "@/utils/string";

type EnvConfigKeys = "publicGqlApiUrl";

export const envVarConfig: Record<EnvConfigKeys, string> = {
  publicGqlApiUrl: ensureString(
    "GRAPHQL_API_BASE_URI",
    process.env.GRAPHQL_API_BASE_URI
  ),
};
