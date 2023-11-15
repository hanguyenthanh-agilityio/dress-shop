import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
// import { expect } from "@jest/globals";

// Constants
import { OPTION_SORT } from "../../constants/common";

// Components
import Select from ".";

describe("Select component", () => {
  it("should render Select snapshot correctly", () => {
    const selectOption = render(
      <Select options={OPTION_SORT} />
    );
    expect(selectOption).toMatchSnapshot();
  });

  it("Should render Select correctly with onChange props", async () => {
    const mock = jest.fn();
    const { getByTestId } = render(
      <Select options={OPTION_SORT} onChange={mock} />
    );

    const select = getByTestId("select-base");

    fireEvent.change(select, { target: { value: 2 } });

    expect(mock).toHaveBeenCalled();
  });

  it("Should render Select correctly with onBlur props", async () => {
    const mock = jest.fn();
    const { getByTestId } = render(
      <Select options={OPTION_SORT} onBlur={mock} />
    );

    const select = getByTestId("select-base");

    fireEvent.blur(select);

    expect(mock).toHaveBeenCalled();
  });
});
