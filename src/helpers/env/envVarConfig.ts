type EnvConfigKeys = "publicGqlApiUrl";

export const envVarConfig: Record<EnvConfigKeys, string> = {
  publicGqlApiUrl: process.env.NEXT_PUBLIC_GRAPHQL_API_BASE_URI,
};
