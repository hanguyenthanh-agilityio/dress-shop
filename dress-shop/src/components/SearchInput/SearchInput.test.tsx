import {render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchInput from ".";


describe("SearchInput component", () => {
  const props = {
    placeholder: "Search",
    onChange: jest.fn(),
  };

  const search = () => {
    return render(<SearchInput {...props} />);
  };

  it("Should render SearchInput snapshot correctly", () => {
    expect(search()).toMatchSnapshot();
  });
});
