import { render } from "@testing-library/react";
import { Table } from "@chakra-ui/react";

// Components
import Card from ".";

// Mocks
import { PRODUCT_CART } from "../../mocks/common";

// Constants
import { HEADER_LIST } from "../../constants/cart";

describe("Card component", () => {
  it("Should render Card snapshot correctly", () => {
    const card = render(
      <Table>
        <Card products={PRODUCT_CART} headerList={HEADER_LIST} total={0} />
      </Table>,
    );

    expect(card).toMatchSnapshot();
  });
});
