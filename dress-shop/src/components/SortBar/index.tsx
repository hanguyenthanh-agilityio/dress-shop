import { Button, Flex, Text } from "@chakra-ui/react";
import Select from "../Select";
import SelectType from "../../types/select";

interface SortBarProps {
  options: SelectType[];
  onClickMenCategories: () => void;
  onClickWomenCategories: () => void;
  onChangeSelect: () => void;
}

const SortBar = ({
  options,
  onClickMenCategories,
  onClickWomenCategories,
  onChangeSelect
}: SortBarProps) => {
  return (
    <Flex justifyContent="space-between" bg="#e5e5e5">
      <Flex>
        <Button
          variant="primary"
          size="medium"
          onClick={onClickMenCategories}
          data-testid="men-categories"
        >
          Men
        </Button>
        <Button
          variant="primary"
          size="medium"
          onClick={onClickWomenCategories}
          data-testid="women-categories"
        >
          Women
        </Button>
      </Flex>
      <Flex alignItems="center" textAlign="center" w="300px">
        <Text pr="10px">Sort by</Text>
        <Select options={options} onChange={onChangeSelect} />
      </Flex>
    </Flex>
  )
};

export default SortBar;
