import { ChangeEvent, memo } from "react";

// Types
import SelectType from "@/types/select";

// Components
import { Select as SelectChakra } from "@chakra-ui/react";

interface SelectProps {
  options: SelectType[];
  placeholder?: string;
  onBlur?: () => void;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

const Select = memo<SelectProps>(
  ({
    options,
    placeholder = "Select",
    onBlur = () => {},
    onChange,
    value,
  }: SelectProps) => {
    return (
      <SelectChakra
        maxW={{ xs: "180px", lg: "210px" }}
        bg="background.light"
        border="none"
        placeholder={placeholder}
        name="select-base"
        cursor="pointer"
        iconColor="text.helper"
        data-testid="select-base"
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      >
        {options.map(({ label, value }, index) => (
          <option key={`label-${index}`} value={value}>
            {label}
          </option>
        ))}
      </SelectChakra>
    );
  },
);

export default Select;
