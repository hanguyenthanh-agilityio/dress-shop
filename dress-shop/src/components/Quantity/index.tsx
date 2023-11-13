import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react"

const Quantity = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW="142px" gap="none">
      <Button variant="quantity" {...dec}>-</Button>
      <Input variant="quantity" size="primary" {...input} />
      <Button variant="quantity" {...inc}>+</Button>
    </HStack>
  )
}

export default Quantity;
