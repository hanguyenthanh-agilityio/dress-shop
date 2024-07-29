import { ChangeEvent, memo } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

// Components
import { Select } from "@/components";

// Types
import { SelectType, Category } from "@/types";

interface SortBarProps {
  categories: Category[];
  options: SelectType[];
  onChangeSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  filterCategory?: string;
  order?: string;
}

const SortBar = memo<SortBarProps>(
  ({
    options,
    categories,
    onChangeSelect,
    filterCategory,
    order,
  }: SortBarProps) => {
    return (
      <Flex
        p="10px"
        mb="20px"
        flexDir={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
      >
        <Flex justifyContent={{ xs: "center" }}>
          {categories.map(({ id, action, label, value }: Category) => (
            <Button
              key={id}
              variant="primary"
              size={{ xs: "default", lg: "medium" }}
              onClick={action}
              data-testid={id}
              p={{ xs: "8px 30px", md: "10px 50px" }}
              bg={filterCategory !== value ? "#3a3b3c" : "background.red"}
              color={filterCategory !== value ? "text.default" : "text.default"}
              width={{ xs: "100%" }}
              border="none"
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
          <Text
            pr={{ xs: "5px", md: "10px" }}
            w="100px"
            color="#fff"
            textAlign="left"
          >
            Sort by
          </Text>
          <Select options={options} onChange={onChangeSelect} value={order} />
        </Flex>
      </Flex>
    );
  },
);

export default SortBar;
