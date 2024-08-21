import { Button, HStack, Text } from "@chakra-ui/react";

const Quantity = ({
  quantity,
  onClickInc,
  onClickDec,
  isDisable,
}: {
  quantity: number;
  onClickDec: () => void;
  onClickInc: () => void;
  isDisable: boolean;
}) => {
  return (
    <HStack maxW="142px" gap="none">
      <Button
        bg="#3a3b3c"
        color="text.default"
        border="none"
        variant="quantity"
        size={{ xs: "primary", lg: "secondary" }}
        onClick={onClickDec}
        isDisabled={isDisable}
      >
        -
      </Button>
      <Text color="text.default" mx="20px">
        {quantity}
      </Text>
      <Button
        bg="#3a3b3c"
        color="text.default"
        border="none"
        variant="quantity"
        size={{ xs: "primary", lg: "secondary" }}
        onClick={onClickInc}
      >
        +
      </Button>
    </HStack>
  );
};

export default Quantity;
