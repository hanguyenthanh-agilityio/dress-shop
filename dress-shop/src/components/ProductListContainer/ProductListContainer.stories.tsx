import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductListContainer from '.';

export default {
  title: 'Components/ProductListContainer',
  component: ProductListContainer,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof ProductListContainer>;

export const Default: Story = {};
