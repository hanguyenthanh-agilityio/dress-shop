import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Components
import ProductDetail from ".";
import { QueryClient, QueryClientProvider } from "react-query";

describe("ProductDetail component", () => {
  it("Should render ProductDetail snapshot correctly", () => {
    const queryClient = new QueryClient();
    const productDetail = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ProductDetail />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(productDetail).toMatchSnapshot();
  });
});

