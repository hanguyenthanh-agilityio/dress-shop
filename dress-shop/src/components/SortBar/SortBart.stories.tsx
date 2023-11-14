import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import SortBar from '.';
import { OPTION_SORT } from '../../constants/common';
import { Container } from '@chakra-ui/react';


export default {
  title: 'Components/SortBar',
  component: SortBar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Container>
          <Story />
        </Container>
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof SortBar>;

export const Default: Story = {
  args: {
    options: OPTION_SORT
  }
};
