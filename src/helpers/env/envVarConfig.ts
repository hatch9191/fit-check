type EnvConfigKeys = "publicGqlApiUrl";

export const envVarConfig: Record<EnvConfigKeys, string> = {
  publicGqlApiUrl: process.env.GRAPHQL_API_BASE_URI,
};
