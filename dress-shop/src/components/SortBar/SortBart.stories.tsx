import { StoryObj, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Container } from "@chakra-ui/react";

// Components
import SortBar from ".";

export default {
  title: "Components/SortBar",
  component: SortBar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Container>
          <Story />
        </Container>
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof SortBar>;

export const Default: Story = {
  args: {},
};
