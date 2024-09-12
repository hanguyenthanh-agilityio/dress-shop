import { StoryObj, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import SearchProduct from ".";

export default {
  title: "Components/SearchProduct",
  component: SearchProduct,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof SearchProduct>;

export const Default: Story = {};
