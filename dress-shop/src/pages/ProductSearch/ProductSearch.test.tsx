import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Components
import ProductSearch from ".";

describe("ProductSearch component", () => {
  it("Should render ProductSearch snapshot correctly", () => {
    const queryClient = new QueryClient();

    const productSearch = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ProductSearch />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(productSearch).toMatchSnapshot();
  });
});
