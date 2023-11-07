import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons"

interface SearchInputProps {
  placeholder?: string;
  onChange: () => void;
}

const SearchInput = ({
  placeholder = "Search Product...",
  onChange
}: SearchInputProps) => {

  return (
    <InputGroup maxW="300px">
      <Input
        background="background.light"
        placeholder={placeholder}
        onChange={onChange}
        name="search-input"
        data-testid="search-input-field"
      />
      <InputRightElement
        right="16px"
        bottom="0px"
        top="0px"
        children={
          <Icon
            as={SearchIcon}
            color="text.helper"
            w="22px"
            h="22px"
          />
        }
      />
    </InputGroup>
  )
}

export default SearchInput;
