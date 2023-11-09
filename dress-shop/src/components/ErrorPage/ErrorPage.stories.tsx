import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorPage from '.';


export default {
  title: 'Components/ErrorPage',
  component: ErrorPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof ErrorPage>;

export const Default: Story = {};
