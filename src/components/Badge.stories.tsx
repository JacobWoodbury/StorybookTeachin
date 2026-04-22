import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

//define the metadata for the component
const meta = {
  title: "Components/Badge", // Defines the sidebar directory path
  component: Badge, // The actual component being documented
  tags: ["autodocs"], // Enables the automated Documentation tab
  argTypes: {
    // wire up a `tone` control so you can pick neutral, success,
    // warning, or danger from the Controls panel.
    tone: {
      control: "select",
      options: ["neutral", "success", "...", "..."], // add the missing tones here
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    // set a tone (see `BadgeTone` in Badge.tsx).
    tone: "neutral",
    // set the text shown inside the badge.
    children: "Add text here",
  } as Story["args"],
};

//Add the other stories below.

// export const Success: Story = {
//   args: {
//     tone: "...", 
//     children: "...",
//   } as Story["args"],
// };

//warning

//danger