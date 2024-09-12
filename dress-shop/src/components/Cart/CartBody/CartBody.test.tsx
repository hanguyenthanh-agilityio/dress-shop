import { fireEvent, render } from "@testing-library/react";
import { Table } from "@chakra-ui/react";

// Components
import CardBody from ".";

// Mocks
import { PRODUCT_CART } from "@/mocks/common";
import { UseCartContext } from "@/stores";

// Mock the context hook
jest.mock("../../../stores/Context", () => ({
  UseCartContext: jest.fn(),
}));

const props = {
  product: PRODUCT_CART,
  total: 400,
  quantity: 400,
};

const mockHandleDelete = jest.fn();

beforeEach(() => {
  (UseCartContext as jest.Mock).mockReturnValue({
    handleDelete: mockHandleDelete,
  });
});

const cartBody = () => {
  return render(
    <Table>
      <CardBody {...props} />
    </Table>,
  );
};

describe("CardBody component", () => {
  it("Should render CardBody snapshot correctly", () => {
    const component = cartBody();

    expect(component).toMatchSnapshot();
  });

  it("Renders CartRow with correct props and calls handleDelete on delete", () => {
    const { getByText, getByTestId } = cartBody();

    // Check if CartRow is rendered with correct props
    expect(getByText(PRODUCT_CART.name)).toBeInTheDocument();

    // Find and click the delete button
    const deleteButton = getByTestId("delete-button");
    fireEvent.click(deleteButton);

    // Assert that handleDelete was called with the correct product
    expect(mockHandleDelete).toHaveBeenCalledWith(PRODUCT_CART);
  });
});
