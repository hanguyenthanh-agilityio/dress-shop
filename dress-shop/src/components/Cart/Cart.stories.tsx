import { StoryObj, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Container, Table } from "@chakra-ui/react";

// Components
import Cart from ".";

// Constants
import { HEADER_LIST } from "@/constants";

export default {
  title: "Components/Cart",
  component: Cart,
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

type Story = StoryObj<typeof Cart>;

export const Default: Story = {
  args: {
    headerList: HEADER_LIST,
  },
};
