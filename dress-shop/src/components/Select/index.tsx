import { memo } from "react";

// Types
import SelectType from "@/types/select";

// Components
import { Select as SelectChakra } from "@chakra-ui/react";

interface SelectProps {
  options: SelectType[];
  placeholder?: string;
  onBlur?: () => void;
  // onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  // value?: string;
  onChange?: () => void;
}

const Select = memo<SelectProps>(
  ({
    options,
    placeholder = "Select",
    onBlur = () => {},
    onChange, // value,
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
        // value={value}
      >
        {options.map(
          (
            { label },
            index, //value
          ) => (
            <option key={`label-${index}`}>{label}</option> //value={value}
          ),
        )}
      </SelectChakra>
    );
  },
);

export default Select;
