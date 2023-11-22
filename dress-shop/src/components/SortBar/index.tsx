import { Button, Flex, Text } from "@chakra-ui/react";

// Components
import Select from "../Select";

// Types
import SelectType from "@/types/select";
import { Category } from "@/types/common";

interface SortBarProps {
  categories: Category[];
  options: SelectType[];
  onChangeSelect: () => void;
}

const SortBar = ({ options, categories, onChangeSelect }: SortBarProps) => {
  return (
    <Flex
      p="10px"
      flexDir={{ xs: "column", md: "row" }}
      justifyContent={{ xs: "center", lg: "space-between" }}
      bg="#e5e5e5"
    >
      <Flex justifyContent={{ xs: "center" }}>
        {categories.map(({ id, action, label }: Category) => (
          <Button
            key={id}
            variant="primary"
            size={{ xs: "default", lg: "medium" }}
            onClick={action}
            data-testid={id}
            p={{ xs: "8px 40px", md: "10px 50px" }}
          >
            {label}
          </Button>
        ))}
      </Flex>
      <Flex
        alignItems="center"
        textAlign="center"
        justifyContent={{ xs: "center" }}
        margin={{ xs: "10px", lg: "0" }}
      >
        <Text pr={{ xs: "5px", md: "10px" }} w={{ xs: "60px", md: "100px" }}>
          Sort by
        </Text>
        <Select options={options} onChange={onChangeSelect} />
      </Flex>
    </Flex>
  );
};

export default SortBar;
