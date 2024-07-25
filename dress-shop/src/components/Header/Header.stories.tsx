import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import HeaderContainer from '.';

export default {
  title: 'Components/HeaderContainer',
  component: HeaderContainer,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof HeaderContainer>;

export const Default: Story = {};
