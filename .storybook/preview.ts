import type { Preview } from "@storybook/react";

import "../src/styles/reset.css";
import { WithApolloClient, WithUiThemeDecorator } from "./decorators";

const customViewports = {
  small: {
    name: "small",
    styles: {
      width: "360px",
      height: "576px",
    },
    type: "mobile",
  },
  medium: {
    name: "medium",
    styles: {
      width: "768px",
      height: "414px",
    },
    type: "mobile",
  },
  large: {
    name: "large",
    styles: {
      width: "992px",
      height: "428px",
    },
    type: "tablet",
  },
  extraLarge: {
    name: "extraLarge",
    styles: {
      width: "1200px",
      height: "400px",
    },
    type: "desktop",
  },
};

const preview: Preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
      viewports: customViewports,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [],
  decorators: [WithUiThemeDecorator, WithApolloClient],
};

export default preview;
