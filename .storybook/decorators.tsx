import React from "react";
import { Decorator } from "@storybook/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ConfigProvider } from "antd";

export const WithUiThemeDecorator: Decorator = (Story) => (
  <ConfigProvider>
    <Story />
  </ConfigProvider>
);

export const WithApolloClient: Decorator = (Story) => {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "mock-storybook-api/graphql",
  });

  return (
    <ApolloProvider client={apolloClient}>
      <Story />
    </ApolloProvider>
  );
};
