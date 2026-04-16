import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Save changes",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Cancel",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Learn more",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "Unavailable",
  },
};
