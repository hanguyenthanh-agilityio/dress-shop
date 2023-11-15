import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Container, Table } from '@chakra-ui/react';

// Components
import CartHeader from '.';

// Constants
import { HEADER_LIST } from '../../../constants/cart';


export default {
  title: 'Components/CartHeader',
  component: CartHeader,
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

type Story = StoryObj<typeof CartHeader>;

export const Default: Story = {
  args: {
    headerList: HEADER_LIST
  }
};
