import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from ".";
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
  const header = () => {
    return render(
      <MemoryRouter>
        <Header onSubmit={() => {}} />
      </MemoryRouter>
    );
  };

  it("Should render Header snapshot correctly", () => {
    expect(header()).toMatchSnapshot();
  });
});
