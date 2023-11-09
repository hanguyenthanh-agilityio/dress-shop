import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ListProduct from '.';
import { PRODUCT } from '../../constants/common';

export default {
  title: 'Components/ListProduct',
  component: ListProduct,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof ListProduct>;

export const Default: Story = {
  args: {
    product: PRODUCT
  }
};
