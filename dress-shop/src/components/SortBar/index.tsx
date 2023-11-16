import { Button, Flex, Text } from "@chakra-ui/react";
import Select from "../Select";
import SelectType from "../../types/select";
import { Category } from "../../types/common";

interface SortBarProps {
  categories: Category[];
  options: SelectType[];
  onChangeSelect: () => void;
}

const SortBar = ({
  options,
  categories,
  onChangeSelect
}: SortBarProps) => {

  return (
    <Flex justifyContent="space-between" bg="#e5e5e5">
      <Flex>
      {categories.map(({ id, action, label }) => (
        <Button
          variant="primary"
          size="medium"
          onClick={action}
          data-testid={id}
        >
          {label}
        </Button>
      ))}
      </Flex>
      <Flex alignItems="center" textAlign="center" w="300px">
        <Text pr="10px">Sort by</Text>
        <Select options={options} onChange={onChangeSelect} />
      </Flex>
    </Flex>
  )
};

export default SortBar;
