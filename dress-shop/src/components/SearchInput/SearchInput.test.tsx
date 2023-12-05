import {fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchInput from ".";


describe("SearchInput component", () => {
  const props = {
    placeholder: "Search",
    onChange: jest.fn(),
    onSubmit: jest.fn(),
  };

  const search = () => {
    return render(<SearchInput {...props} />);
  };

  it("Should render SearchInput snapshot correctly", () => {
    expect(search()).toMatchSnapshot();
  });

  it("Should render SearchInput correctly with placeholder prop", () => {
    const { getByPlaceholderText } = search();

    expect(getByPlaceholderText(props.placeholder));
  });

  it("Should render SearchInput correctly with onChange prop", () => {
    const { getByTestId } = search();
    const clickSearch = getByTestId("search-input-field");

    fireEvent.change(clickSearch, { target: { value: "Search-input" } });
    expect(props.onChange).toBeCalled();
  });
});
