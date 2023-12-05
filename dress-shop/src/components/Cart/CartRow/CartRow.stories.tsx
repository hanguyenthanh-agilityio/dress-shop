import { StoryObj, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Container, Table } from "@chakra-ui/react";

// Components
import CartRow from ".";

// Constants
import { ITEM_CART } from "../../../mocks/common";

export default {
  title: "Components/CartRow",
  component: CartRow,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Container>
          <Table>
            <Story />
          </Table>
        </Container>
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof CartRow>;

export const Default: Story = {
  args: {
    total: 400,
    product: ITEM_CART,
  },
};
