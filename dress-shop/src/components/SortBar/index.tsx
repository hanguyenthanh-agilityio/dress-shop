import { ChangeEvent } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

// Components
import Select from "@/components/Select";

// Types
import SelectType from "@/types/select";
import { Category } from "@/types/common";

interface SortBarProps {
  categories: Category[];
  options: SelectType[];
  onChangeSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  filterCategory?: string;
  order?: string;
}

const SortBar = ({
  options,
  categories,
  onChangeSelect,
  filterCategory,
  order,
}: SortBarProps) => {
  return (
    <Flex
      p="10px"
      flexDir={{ xs: "column", md: "row" }}
      justifyContent={{ xs: "center", lg: "space-between" }}
      bg="#e5e5e5"
    >
      <Flex justifyContent={{ xs: "center" }}>
        {categories.map(({ id, action, label, value }: Category) => (
          <Button
            key={id}
            variant="primary"
            size={{ xs: "default", lg: "medium" }}
            onClick={action}
            data-testid={id}
            p={{ xs: "8px 40px", md: "10px 50px" }}
            bg={filterCategory !== value ? "#f1f3f5" : "#d82c23"}
            color={filterCategory !== value ? "#000" : "#fff"}
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
        <Select options={options} onChange={onChangeSelect} value={order} />
      </Flex>
    </Flex>
  );
};

export default SortBar;
