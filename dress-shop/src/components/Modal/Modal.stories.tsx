import { StoryObj, Meta } from "@storybook/react";
import Modal from ".";

export default {
  title: "Components/Modal",
  component: Modal,
  decorators: [(Story) => <Story />],
} as Meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    modalTitle: "Update Product",
    ButtonClose: "Confirm",
    isOpen: true,
  },
};
