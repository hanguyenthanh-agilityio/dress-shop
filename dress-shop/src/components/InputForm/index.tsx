import { ERROR_MESSAGES } from "@/constants";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { memo } from "react";
import { UseFormRegister } from "react-hook-form";

interface FormInputProps {
  isInvalid: boolean;
  label: string;
  inputName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  type: string;
}

const FormInput = memo<FormInputProps>(
  ({ label, isInvalid, inputName, register, type }: FormInputProps) => {
    return (
      <FormControl mb="15px" isInvalid={isInvalid}>
        <FormLabel>{label}</FormLabel>
        <Input
          type={type}
          size="full"
          {...register(inputName, { required: true })}
        />
        <FormErrorMessage>
          {isInvalid && ERROR_MESSAGES.FIELD_REQUIRED}
        </FormErrorMessage>
      </FormControl>
    );
  },
);

export default FormInput;
