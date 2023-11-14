import { memo } from "react";

// Types
import SelectType from "../../types/select";

// Components
import { Select as SelectChakra } from "@chakra-ui/react";

interface SelectProps {
  options: SelectType[];
  placeholder?: string;
  onBlur?: () => void;
  onChange?: () => void;
}

const Select =({ options, placeholder, onBlur, onChange }: SelectProps) => {
    return (
      <SelectChakra
        maxW="210px"
        placeholder={placeholder}
        name="select-base"
        cursor="pointer"
        bg="background.light"
        border="none"
        data-testid="select-base"
        onBlur={onBlur}
        onChange={onChange}
      >
        {options.map(({ label }, index) => (
          <option key={`label-${index}`}>{label}</option>
        ))}
      </SelectChakra>
    );
  }


export default memo(Select);
