import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

// Components
import ProductDetail from ".";

describe("ProductDetail page", () => {
  const queryClient = new QueryClient();

  it("Should render ProductDetail snapshot correctly", () => {
    const page = render(
      <QueryClientProvider client={queryClient}>
        <ProductDetail />
      </QueryClientProvider>,
    );

    expect(page).toMatchSnapshot();
  });
});
