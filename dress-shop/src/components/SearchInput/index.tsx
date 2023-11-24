import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEvent } from "react";

interface SearchInputProps {
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // value?: string ;
}

const SearchInput = ({
  placeholder = "Search Product...",
  onChange,
  // value
}: SearchInputProps) => {
  return (
    <InputGroup maxW={{ xs: "100%", lg: "300px" }}>
      <Input
        size={{ xs: "secondary", lg: "default" }}
        fontSize={{ xs: "7px", md: "17px" }}
        pl="10px"
        background="background.light"
        placeholder={placeholder}
        onChange={onChange}
        name="search-input"
        data-testid="search-input-field"
        // value={value}
      />
      <InputRightElement
        right={{ xs: "10px", md: "16px" }}
        bottom="0px"
        top="0px"
        children={
          <Icon
            as={SearchIcon}
            color="text.helper"
            w={{ xs: "10px", md: "22px" }}
            h={{ xs: "10px", md: "22px" }}
          />
        }
      />
    </InputGroup>
  );
};

export default SearchInput;
