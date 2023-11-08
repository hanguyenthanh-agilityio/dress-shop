import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from ".";


describe("Header component", () => {

  const header = () => {
    return render(<Header />);
  };

  it("Should render Header snapshot correctly", () => {
    expect(header()).toMatchSnapshot();
  });
});
