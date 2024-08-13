import { render } from "@testing-library/react";
import { Table } from "@chakra-ui/react";

// Components
import CardBody from ".";

// Mocks
import { PRODUCT_CART } from "@/mocks/common";

describe("CardBody component", () => {
  const props = {
    products: PRODUCT_CART,
    total: 0,
    onDelete: jest.fn(),
  };

  const cartBody = () => {
    return render(
      <Table>
        <CardBody {...props} />
      </Table>,
    );
  };

  it("Should render CardBody snapshot correctly", () => {
    const component = cartBody();

    expect(component).toMatchSnapshot();
  });

  // it("Should render CardBody correctly with onDelete prop", () => {
  //   const { getByTestId } = cartBody();

  //   const deleteButton = getByTestId("delete-button");
  //   fireEvent.click(deleteButton);

  //   expect(deleteButton).toHaveBeenLastCalledWith(1);
  // });
});
