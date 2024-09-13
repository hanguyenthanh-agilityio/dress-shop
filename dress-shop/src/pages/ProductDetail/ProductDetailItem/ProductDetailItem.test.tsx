import { fireEvent, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "@testing-library/jest-dom";

// Components
import ProductDetailItem from ".";

import { useToast } from "@chakra-ui/react";
import { UseCartContext } from "@/stores";
import { PRODUCT } from "@/mocks/common";

// Mock useCartContext
jest.mock("../../../stores/Context", () => ({
  UseCartContext: jest.fn(),
}));

// Declare a mock function for handleAddToCart
const handleAddToCart = jest.fn();
beforeEach(() => {
  (UseCartContext as jest.Mock).mockReturnValue({
    handleAddToCart: handleAddToCart,
  });
});

// Mock useToast
jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useToast: jest.fn(),
}));
const mockToast = jest.fn();
(useToast as jest.Mock).mockReturnValue(mockToast);

const queryClient = new QueryClient();

const mockOnOpen = jest.fn();
const mockOnClose = jest.fn();

const props = {
  product: PRODUCT,
  isLoading: false,
  isOpen: false,
  onOpen: mockOnOpen,
  onClose: mockOnClose,
};

const page = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <ProductDetailItem {...props} />
    </QueryClientProvider>,
  );
};

describe("ProductDetailItem page", () => {
  test("renders product details and buttons correctly", () => {
    const productItem = page();
    const { getByText } = productItem;

    expect(page).toMatchSnapshot();
    expect(getByText("Add to Cart")).toBeInTheDocument();
    expect(getByText("Edit product")).toBeInTheDocument();
  });

  it("handles add to cart correctly", () => {
    const { getByText } = page();

    fireEvent.click(getByText("Add to Cart"));

    expect(handleAddToCart).toHaveBeenCalled();
  });

  it("opens modal when Edit product button is clicked", async () => {
    const { getByText } = page();

    fireEvent.click(getByText("Edit product"));

    expect(mockOnOpen).toHaveBeenCalled();
  });
});
