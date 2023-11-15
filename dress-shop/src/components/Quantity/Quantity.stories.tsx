import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Quantity from '.';


export default {
  title: 'Components/Quantity',
  component: Quantity,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof Quantity>;

export const Default: Story = {};
