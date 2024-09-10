import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

// Components
import ProductDetailItem from ".";

// Mocks
import { CARD } from "@/mocks/common";

describe("ProductDetailItem page", () => {
  const queryClient = new QueryClient();

  it("Should render ProductDetailItem snapshot correctly", () => {
    const page = render(
      <QueryClientProvider client={queryClient}>
        <ProductDetailItem
          product={CARD}
          isLoading={true}
          isOpen={false}
          onOpen={function (): void {
            throw new Error("Function not implemented.");
          }}
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </QueryClientProvider>,
    );

    expect(page).toMatchSnapshot();
  });
});
