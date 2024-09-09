import { render } from "@testing-library/react";
import Card from ".";
import { ITEM_CART } from "@/mocks/common";

describe("Card component", () => {
  it("Should render Card snapshot correctly", () => {
    const card = render(
      <Card
        src={ITEM_CART.imageURL}
        name={ITEM_CART.name}
        price={ITEM_CART.price}
      />,
    );

    expect(card).toMatchSnapshot();
  });
});
