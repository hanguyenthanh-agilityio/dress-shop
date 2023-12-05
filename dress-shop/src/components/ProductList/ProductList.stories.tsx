import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductList from '.';
import { PRODUCTS } from '../../mock/common';


export default {
  title: 'Components/ProductList',
  component: ProductList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {
  args: {
    products: PRODUCTS
  }
};
