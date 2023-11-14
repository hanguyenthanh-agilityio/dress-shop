import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react"

const Quantity = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
    })

  const decrementButton = getDecrementButtonProps()
  const incrementButton = getIncrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW="142px" gap="none">
      <Button variant="quantity" {...decrementButton}>-</Button>
      <Input variant="quantity" size="primary" {...input} />
      <Button variant="quantity" {...incrementButton}>+</Button>
    </HStack>
  )
}

export default Quantity;
