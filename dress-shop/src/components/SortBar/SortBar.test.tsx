import { render } from "@testing-library/react";

// Components
import SortBar from ".";

// import { useDisclosure } from "@chakra-ui/react";

const sortBar = () => {
  return render(<SortBar refetch={() => {}} />);
};

describe("SortBar component", () => {
  it("Should render SortBar snapshot correctly", () => {
    expect(sortBar).toMatchSnapshot();
  });

  // it("Should show modal when click", () => {
  //   const { getByTestId } = sortBar();

  //   const { result } = renderHook(() => useDisclosure());

  //   const toggle = getByTestId("new-product");

  //   fireEvent.click(toggle);

  //   act(() => {
  //     result.current.onOpen();
  //   });

  //   expect(result.current.isOpen).toBe(true);
  // });
});
