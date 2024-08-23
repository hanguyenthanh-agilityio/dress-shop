import { render } from "@testing-library/react";
import Quantity from ".";

describe("Quantity component", () => {
  it("Should render Quantity snapshot correctly", () => {
    const quantity = render(<Quantity quantity={1} />);

    expect(quantity).toMatchSnapshot();
  });

  // TODO: testing inc/dec actions on button
});
