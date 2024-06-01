import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

const theme = create({
  base: "dark",
  brandTitle: "Togather Boilerplate UI",
  brandUrl: "https://www.togather.com",
});

addons.setConfig({ theme });
