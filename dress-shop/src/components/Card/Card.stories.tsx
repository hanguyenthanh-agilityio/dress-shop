import { StoryObj, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Card from ".";
import { ITEM_CART } from "@/mocks/common";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    src: ITEM_CART.imageURL,
    name: ITEM_CART.name,
    price: ITEM_CART.price,
  },
};
