import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from ".";
import { ITEM_CART } from "@/mocks/common";

const props = {
  src: ITEM_CART.imageURL,
  name: ITEM_CART.name,
  price: ITEM_CART.price,
  altText: ITEM_CART.altText,
};

describe("Card component", () => {
  it("Should render Card snapshot correctly", () => {
    const card = render(<Card {...props} />);

    expect(card).toMatchSnapshot();
  });

  it("Renders with optional altText", () => {
    const { getByText } = render(<Card {...props} />);

    expect(getByText(props.name)).toBeInTheDocument();
  });
});
