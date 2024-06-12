import type { Meta, StoryObj } from "@storybook/react";

import { InputError } from "./InputError";

const meta: Meta<typeof InputError> = {
  title: "Atoms/Form/InputError",
  component: InputError,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof InputError>;

export const Primary: Story = {
  args: {
    children: "Something went wrong...",
  },
};
