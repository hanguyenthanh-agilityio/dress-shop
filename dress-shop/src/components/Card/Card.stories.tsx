import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Card from '.';

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    src: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581158167%2Fsbiuoziiqi5gkuvrsymv.jpg&w=1080&q=75',
    name:'Long Sleeves Polka Dots',
    price:'P800'
  }
};
