import { render } from "@testing-library/react";

import Home from ".";

describe("Home page", () => {
  it("Should render Home snapshot correctly", () => {
    const page = render(<Home />);

    expect(page).toMatchSnapshot();
  });
});
