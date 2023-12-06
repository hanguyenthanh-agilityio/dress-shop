import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductListContainer from ".";
import { MemoryRouter } from "react-router-dom";

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
