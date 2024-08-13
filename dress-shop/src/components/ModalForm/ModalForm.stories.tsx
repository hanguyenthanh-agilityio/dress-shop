import { StoryObj, Meta } from "@storybook/react";
import ModalForm from ".";

export default {
  title: "Components/ModalForm",
  component: ModalForm,
  decorators: [(Story) => <Story />],
} as Meta;

type Story = StoryObj<typeof ModalForm>;

export const Default: Story = {
  args: {
    modalTitle: "Update Product",
    buttonLabel: "Confirm",
    isLoading: true,
  },
};
