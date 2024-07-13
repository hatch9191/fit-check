import { ASTNode } from "graphql/language/ast";
import { print } from "graphql/language/printer";
import gql from "graphql-tag";

import { getAxiosSingleton } from "@/helpers/http/services/client";

const getGqlStringValue = (query: ASTNode) => print(query);

export const customFetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options = {}
) => {
  return async (): Promise<TData> => {
    const client = getAxiosSingleton();

    const res = await client.request<{ data: TData; errors: unknown }>({
      data: {
        query: getGqlStringValue(gql`
          ${query}
        `),
        variables,
        ...options,
      },
    });

    if (res.data?.errors) {
      const { message } = (res.data.errors as Error[])[0];
      throw new Error(message);
    }

    return res.data.data;
  };
};
