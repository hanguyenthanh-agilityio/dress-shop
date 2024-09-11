import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "@testing-library/jest-dom/extend-expect";

// Components
import ProductDetail from ".";
import { Product } from "@/types";
import { PRODUCT, PRODUCTS } from "@/mocks/common";
import { useProductId, useProducts } from "@/hooks";

// Mock the hooks
jest.mock("../../hooks/useProduct", () => ({
  useProductId: jest.fn(),
  useProducts: jest.fn(),
}));

// Mock the ProductList component
jest.mock(
  "../../components/ProductList",
  () =>
    ({ products }: { products: Product[] }) => (
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    ),
);

const queryClient = new QueryClient();

const page = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <ProductDetail />
    </QueryClientProvider>,
  );
};

describe("ProductDetail page", () => {
  it("Should render ProductDetail snapshot correctly", () => {
    expect(page).toMatchSnapshot();
  });
});

describe("Related Product render", () => {
  test("Renders loading state and then related products", () => {
    // Mock implementations
    (useProducts as jest.Mock).mockReturnValue({ data: PRODUCTS });
    (useProductId as jest.Mock).mockReturnValue({
      data: PRODUCT,
      isLoading: false,
    });

    const { queryByText } = page();

    // Ensure the current product is not displayed
    expect(queryByText("Product 2")).not.toBeInTheDocument();

    // Ensure products from different categories are not displayed
    expect(queryByText("Product 3")).not.toBeInTheDocument();
  });
});
