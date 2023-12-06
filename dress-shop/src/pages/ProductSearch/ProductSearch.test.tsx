import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Components
import ProductSearch from ".";


describe("ProductSearch component", () => {
  it("Should render ProductSearch snapshot correctly", () => {
    const productSearch = render(
      <MemoryRouter>
        <ProductSearch />
      </MemoryRouter>
    );

    expect(productSearch).toMatchSnapshot();
  });
});
