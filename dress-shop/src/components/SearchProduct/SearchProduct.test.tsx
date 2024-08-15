import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import SearchProduct from ".";

describe("SearchProduct component", () => {
  const mockedUsedNavigate = jest.fn();

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
  }));

  const search = () => {
    return render(
      <BrowserRouter>
        <SearchProduct />
      </BrowserRouter>,
    );
  };

  it("Should render SearchProduct snapshot correctly", () => {
    expect(search()).toMatchSnapshot();
  });
});
