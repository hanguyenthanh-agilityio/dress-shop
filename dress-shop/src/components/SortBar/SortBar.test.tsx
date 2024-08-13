import { act, fireEvent, render, renderHook } from "@testing-library/react";

// Components
import SortBar from ".";

// Constants
import { OPTION_SORT } from "@/constants";

// Mocks
import { CATEGORIES_BUTTON } from "@/mocks/common";
import { useDisclosure } from "@chakra-ui/react";

const props = {
  options: OPTION_SORT,
  categories: CATEGORIES_BUTTON,
  onChangeSelect: jest.fn(),
};

const sortBar = () => {
  return render(<SortBar onConfirm={() => {}} {...props} />);
};

describe("SortBar component", () => {
  it("Should render SortBar snapshot correctly", () => {
    expect(sortBar).toMatchSnapshot();
  });

  it("Should show modal when click", () => {
    const { getByTestId } = sortBar();

    const { result } = renderHook(() => useDisclosure());

    const toggle = getByTestId("new-product");

    fireEvent.click(toggle);

    act(() => {
      result.current.onOpen();
    });

    expect(result.current.isOpen).toBe(true);
  });
});
