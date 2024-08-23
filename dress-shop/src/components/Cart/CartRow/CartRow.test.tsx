import { render } from "@testing-library/react";
import { Table } from "@chakra-ui/react";

// Components
import CardRow from ".";

// Mocks
import { ITEM_CART } from "@/mocks/common";

describe("CardRow component", () => {
  const props = {
    product: ITEM_CART,
    total: 400,
    quantity: 1,
    onDelete: jest.fn(),
  };

  const cardRow = () => {
    return render(
      <Table>
        <CardRow {...props} />
      </Table>,
    );
  };

  it("Should render CardRow snapshot correctly", () => {
    const component = cardRow();

    expect(component).toMatchSnapshot();
  });

  // it("Should render CardBody correctly with onDelete prop", () => {
  //   const { getByText } = cardRow();

  //   const deleteButton = getByText("Delete");
  //   fireEvent.click(deleteButton);

  //   expect(deleteButton).toHaveBeenCalledWith(1);
  // });
});
