import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductListContainer from ".";

describe("ProductListContainer component", () => {
  const queryClient = new QueryClient();
  it("Should render ProductList snapshot correctly", () => {
    const productListContainer = render(
      <QueryClientProvider client={queryClient}>
        <ProductListContainer />
      </QueryClientProvider>,
    );

    expect(productListContainer).toMatchSnapshot();
  });
});
