// STEP 1: Import Storybook types and your local component
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

// STEP 2: Configure the default metadata for the component
const meta = {
  title: "Components/Card", // Defines the sidebar directory path
  component: Card, // The actual component being documented
  tags: ["autodocs"], // Enables the automated Documentation tab
  parameters: {
    layout: "padded", // Adds padding around the component
  },
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

// STEP 3: Define the "Default" visual state (story)
export const Default: Story = {
  args: {
    title: "Reading streak",
    children: "You read on 5 of 7 days. Keep it up.",
  },
};

// STEP 4: Define the "With Subtitle" story
export const WithSubtitle: Story = {
  args: {
    title: "Reading streak",
    subtitle: "Last 7 days",
    children: "You read on 5 of 7 days. Keep it up.",
  },
};
