import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import MainLayout from ".";

describe("MainLayout component", () => {
  it("Should render MainLayout snapshot correctly", () => {
    const main = render(
      <Router>
        <MainLayout />
      </Router>,
    );

    expect(main).toMatchSnapshot();
  });
});
