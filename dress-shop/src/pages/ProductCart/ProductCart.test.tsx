import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import ProductCart from ".";

describe("ProductCart page", () => {
  it("Should render ProductCart snapshot correctly", () => {
    const page = render(
      <Router>
        <ProductCart />
      </Router>,
    );

    expect(page).toMatchSnapshot();
  });
});
