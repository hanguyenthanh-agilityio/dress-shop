import { StoryObj, Meta } from "@storybook/react";

// Components
import ProductDetailItem from ".";

// Mocks
import { ITEM_CART } from "@/mocks/common";

export default {
  title: "Components/Card",
  component: ProductDetailItem,
  decorators: [(Story) => <Story />],
} as Meta;

type Story = StoryObj<typeof ProductDetailItem>;

export const Default: Story = {
  args: {
    product: ITEM_CART,
    isLoading: true,
  },
};
