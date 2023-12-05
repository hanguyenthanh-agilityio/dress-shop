import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Container, Table } from '@chakra-ui/react';

// Components
import CartBody from '.';

// Constants
import { PRODUCT_CART } from '../../../mock/common';


export default {
  title: 'Components/CartBody',
  component: CartBody,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Container>
          <Table>
            <Story />
          </Table>
        </Container>
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof CartBody>;

export const Default: Story = {
  args: {
    products: PRODUCT_CART,
    total: 400
  }
}
