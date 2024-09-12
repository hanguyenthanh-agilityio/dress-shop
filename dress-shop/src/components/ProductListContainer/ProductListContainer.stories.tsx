import { StoryObj, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ProductListContainer from ".";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default {
  title: "Components/ProductListContainer",
  component: ProductListContainer,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </QueryClientProvider>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof ProductListContainer>;

export const Default: Story = {};
