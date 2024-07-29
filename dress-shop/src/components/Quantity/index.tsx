import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

const Quantity = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
    });

  const decrementButtonProps = getDecrementButtonProps();
  const incrementButtonProps = getIncrementButtonProps();
  const inputProps = getInputProps();

  return (
    <HStack maxW="142px" gap="none">
      <Button
        bg="#3a3b3c"
        color="text.default"
        border="none"
        variant="quantity"
        size={{ xs: "primary", lg: "secondary" }}
        {...decrementButtonProps}
      >
        -
      </Button>
      <Input
        variant="quantity"
        borderRadius="none"
        bg="none"
        color="text.default"
        size="primary"
        {...inputProps}
      />
      <Button
        bg="#3a3b3c"
        color="text.default"
        border="none"
        variant="quantity"
        size={{ xs: "primary", lg: "secondary" }}
        {...incrementButtonProps}
      >
        +
      </Button>
    </HStack>
  );
};

export default Quantity;
