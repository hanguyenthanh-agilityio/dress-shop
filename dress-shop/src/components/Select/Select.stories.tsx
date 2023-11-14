import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import Select from '.';

// Constants
import { OPTION_SORT } from '../../constants/common';


export default {
  title: 'Components/Select',
  component: Select,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: OPTION_SORT
  }
};
