import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import SearchProduct from ".";

describe("SearchProduct component", () => {
  const mockedUsedNavigate = jest.fn();

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
  }));

  const search = () => {
    return render(
      <Router>
        <SearchProduct />
      </Router>,
    );
  };

  it("Should render SearchProduct snapshot correctly", () => {
    expect(search()).toMatchSnapshot();
  });

  it("calls onChange when input value changes", () => {
    const { getByRole } = search();
    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "new value" } });

    expect((document.getElementById("myInput") as HTMLInputElement).value).toBe(
      "new value",
    );
  });
});
