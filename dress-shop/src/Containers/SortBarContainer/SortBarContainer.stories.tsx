import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import SortBarContainer from '.';

export default {
  title: 'Components/SortBarContainer',
  component: SortBarContainer,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof SortBarContainer>;

export const Default: Story = {};
