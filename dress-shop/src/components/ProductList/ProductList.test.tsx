import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Components
import ProductList from ".";

// Mocks
import { PRODUCTS } from "@/mocks/common";

describe("ProductList component", () => {
  it("Should render ProductList snapshot correctly", () => {
    const productList = render(
      <MemoryRouter>
        <ProductList products={PRODUCTS} />
      </MemoryRouter>,
    );

    expect(productList).toMatchSnapshot();
  });
});
