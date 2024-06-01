import React from "react";
import { Decorator } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import { baseTheme } from "@feast-it/ui";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const WithUiThemeDecorator: Decorator = (Story) => (
  <ThemeProvider theme={baseTheme}>
    <Story />
  </ThemeProvider>
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
