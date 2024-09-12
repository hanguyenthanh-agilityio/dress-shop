import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductSearch from ".";

jest.mock("react-query", () => ({
  useInfiniteQuery: jest.fn(),
}));

describe("ProductSearch component", () => {
  const queryClient = new QueryClient();
  it("Should render ProductList snapshot correctly", () => {
    const product = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ProductSearch />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(product).toMatchSnapshot();
  });
});
