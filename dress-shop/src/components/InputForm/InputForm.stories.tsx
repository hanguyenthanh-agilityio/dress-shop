import { StoryObj, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import InputForm from ".";
import { useForm } from "react-hook-form";

interface InputFormProps {
  isInvalid: boolean;
  label: string;
  inputName: string;
  type: string;
  placeholder: string;
}

const InputFormStory = (args: InputFormProps) => {
  const { register } = useForm();

  return <InputForm {...args} register={register} />;
};

export default {
  title: "Components/InputForm",
  component: InputFormStory,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof InputFormStory>;

export const Default: Story = {
  args: {
    isInvalid: false,
    label: "Name",
    inputName: "Name",
    type: "text",
    placeholder: " Product Name",
  },
};
