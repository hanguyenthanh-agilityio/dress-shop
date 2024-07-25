import { render } from "@testing-library/react";
import ProductListContainer from ".";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("ProductListContainer component", () => {
  const queryClient = new QueryClient();
  it("Should render ProductList snapshot correctly", () => {
    const productListContainer = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ProductListContainer />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(productListContainer).toMatchSnapshot();
  });
});
