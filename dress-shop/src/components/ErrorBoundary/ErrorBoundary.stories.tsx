import { StoryObj, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ErrorBoundary from ".";

export default {
  title: "Components/ErrorBoundary",
  component: ErrorBoundary,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof ErrorBoundary>;

export const Default: Story = {};
