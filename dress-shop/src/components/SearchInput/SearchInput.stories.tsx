import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import SearchInput from '.';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {};
