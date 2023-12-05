import { render } from "@testing-library/react";

// Components
import SortBar from ".";

// Constants
import { OPTION_SORT } from "../../constants/common";

// Mocks
import { CATEGORIES_BUTTON } from "../../mocks/common";

const props = {
  options: OPTION_SORT,
  categories: CATEGORIES_BUTTON,
  onChangeSelect: jest.fn(),
};

const sortBar = () => {
  return render(<SortBar {...props} />);
};

describe("SortBar component", () => {
  it("Should render SortBar snapshot correctly", () => {
    expect(sortBar).toMatchSnapshot();
  });
});
