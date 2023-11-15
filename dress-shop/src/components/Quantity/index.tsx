import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react"

const Quantity = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
    })

  const decrementButtonProps = getDecrementButtonProps()
  const incrementButtonProps = getIncrementButtonProps()
  const inputProps = getInputProps()

  return (
    <HStack maxW="142px" gap="none">
      <Button variant="quantity" {...decrementButtonProps}>-</Button>
      <Input variant="quantity" size="primary" {...inputProps} />
      <Button variant="quantity" {...incrementButtonProps}>+</Button>
    </HStack>
  )
}

export default Quantity;
