import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {Search2Icon} from "@chakra-ui/icons"

interface SearchInputProps {
  placeholder?: string;
  onChange: () => void;
}

const SearchInput = ({
  placeholder = "Search Product...",
  onChange
}: SearchInputProps) => {

  return (
    <InputGroup>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        name="search-input"
        data-testid="search-input-field"
      />
      <InputRightElement
        children={
          <Icon
            as={Search2Icon}
            color="text.helper"
            w="30px"
            h="30px"
          />
        }
      />
    </InputGroup>
  )
}

export default SearchInput;
