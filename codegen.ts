import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://staging-api-graph.feast-it.com/graphql",
  documents: "src/graphql/operations/**/*.gql",
  generates: {
    "./src/graphql/codegen/codegen_rq.ts": {
      config: {
        legacyMode: false,
        withHooks: true,
        dedupeFragments: true,
        typesPrefix: "I",
        typeNames: "change-case-all#pascalCase",
        namingConvention: "change-case-all#pascalCase",
        transformUnderscore: true,
        avoidOptionals: true,
        exposeQueryKeys: true,
        exposeFetcher: true,
        exposeDocument: true,
        fetcher: {
          isReactHook: false,
          func: "./customFetcher#customFetcher",
        },
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
    },
  },
};

export default config;
