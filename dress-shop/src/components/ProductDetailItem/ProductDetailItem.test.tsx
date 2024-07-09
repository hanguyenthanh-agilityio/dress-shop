import { render } from "@testing-library/react";

// Components
import ProductDetailItem from ".";

// Mocks
import { ITEM_CART } from "@/mocks/common";

describe("ProductDetailItem component", () => {
  it("Should render ProductDetailItem snapshot correctly", () => {
    const item = render(
      <ProductDetailItem product={ITEM_CART} isLoading={true} />,
    );

    expect(item).toMatchSnapshot();
  });
});
