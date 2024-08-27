import { Button, HStack, Text } from "@chakra-ui/react";

const Quantity = ({ quantity }: { quantity: number }) => {
  return (
    <HStack maxW="142px" gap="none">
      <Button
        bg="#3a3b3c"
        color="text.default"
        border="none"
        variant="quantity"
        size={{ xs: "primary", lg: "secondary" }}
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
      >
        +
      </Button>
    </HStack>
  );
};

export default Quantity;
