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

const Select = memo<SelectProps>(({ options, placeholder, onBlur, onChange }: SelectProps) => {
  return (
    <SelectChakra
      maxW="210px"
      placeholder={placeholder}
      name="select-base"
      cursor="pointer"
      iconColor="text.helper"
      data-testid="select-base"
      onBlur={onBlur}
      onChange={onChange}
    >
      {options.map(({ label }, index) => (
        <option key={`label-${index}`}>{label}</option>
      ))}
    </SelectChakra>
  )
})

export default Select;
