import { act, fireEvent, render, renderHook } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter as Router } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";

// Components
import SortBar from ".";

const queryClient = new QueryClient();
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const sortBar = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <SortBar refetch={() => {}} />
      </Router>
    </QueryClientProvider>,
  );
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

  it("Navigate to Categories on button click", () => {
    const { getAllByTestId } = sortBar();

    const divElement = getAllByTestId("button-navigate")[0];

    fireEvent.click(divElement);

    expect(mockNavigate).toBeCalled();
    mockNavigate.mockRestore();
  });
});
