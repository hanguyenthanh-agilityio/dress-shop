import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Components
import ProductCart from ".";
import { QueryClient, QueryClientProvider } from "react-query";

describe("ProductCart component", () => {
  it("Should render ProductCart snapshot correctly", () => {
    const queryClient = new QueryClient();
    const productCart = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ProductCart />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(productCart).toMatchSnapshot();
  });
});

