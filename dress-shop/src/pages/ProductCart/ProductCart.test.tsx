import { render } from "@testing-library/react";
// import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter as Router } from "react-router-dom";

import ProductCart from ".";
import { UseCartContext } from "@/stores";
// import colors from "@/themes/color";

// Mock UseCartContext
jest.mock("../../stores/Context", () => ({
  UseCartContext: jest.fn(),
}));

describe("TotalPriceComponent", () => {
  const mockedUseCartContext = UseCartContext as jest.MockedFunction<
    typeof UseCartContext
  >;

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("calculates total price correctly for a single item", () => {
    mockedUseCartContext.mockReturnValue({
      state: {
        cart: [
          {
            price: 100,
            quantity: 1,
            imageURL: "",
            name: "",
          },
        ],
      },
      handleAddToCart: jest.fn(),
      getCartList: jest.fn(),
      handleDelete: jest.fn(),
    });

    const { getByText } = render(
      <Router>
        <ProductCart />
      </Router>,
    );
    expect(getByText("P100")).toBeInTheDocument();
  });

  test("calculates total price correctly for multiple items", () => {
    mockedUseCartContext.mockReturnValue({
      state: {
        cart: [
          {
            price: 100,
            quantity: 1,
            imageURL: "",
            name: "",
          },
          {
            price: 200,
            quantity: 2,
            imageURL: "",
            name: "",
          },
        ],
      },
      handleAddToCart: jest.fn(),
      getCartList: jest.fn(),
      handleDelete: jest.fn(),
    });

    const { getByText } = render(
      <Router>
        <ProductCart />
      </Router>,
    );
    expect(getByText("P500")).toBeInTheDocument();
  });
});

// describe("EmptyCartMessage Component", () => {
//   test("renders the Heading with correct text and Link", () => {
//     const { getByText, getByRole } = render(
//       <Router>
//         <ProductCart />
//       </Router>,
//     );

//     const headingElement = getByText("No item in Cart. Add");
//     const linkElement = getByRole("link", { name: "Products" });

//     // Assertions
//     expect(headingElement).toBeInTheDocument();
//     expect(headingElement).toHaveStyle(`color: ${colors.text.default}`);
//     expect(linkElement).toBeInTheDocument();
//     expect(linkElement).toHaveAttribute("href", "/");
//   });
// });
