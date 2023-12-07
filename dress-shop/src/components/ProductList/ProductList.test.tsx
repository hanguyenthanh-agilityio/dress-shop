import { render } from "@testing-library/react";
import ProductList from ".";
import { PRODUCTS } from "../../mocks/common";
import { MemoryRouter } from "react-router-dom";

describe("ProductList component", () => {
  it("Should render ProductList snapshot correctly", () => {
    const productList = render(
      <MemoryRouter>
        <ProductList products={PRODUCTS} />
      </MemoryRouter>
    );

    expect(productList).toMatchSnapshot();
  });
});
