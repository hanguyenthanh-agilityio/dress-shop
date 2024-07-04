import { StoryObj, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

// Components
import ProductList from ".";

// Mocks
import { PRODUCTS } from "@/mocks/common";

export default {
  title: "Components/ProductList",
  component: ProductList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {
  args: {
    products: PRODUCTS,
  },
};
