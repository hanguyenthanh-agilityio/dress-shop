import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import LoadingIndicator from '.';


export default {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof LoadingIndicator>;

export const Default: Story = {};
