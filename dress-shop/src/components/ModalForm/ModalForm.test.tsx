import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

// Components
import FormModal from ".";

describe("FormModal render", () => {
  const mockOnConfirm = jest.fn();
  const mockOnClose = jest.fn();

  const props = {
    modalTitle: "Product",
    buttonLabel: "Confirm",
    onClose: mockOnClose,
    onConfirm: mockOnConfirm,
  };
  const confirm = () => {
    return render(<FormModal {...props} />);
  };

  it("Should render FormModal with snapshot correctly", () => {
    const component = confirm();

    expect(component).toMatchSnapshot();
  });

  it("Should call onClose when click to close button", () => {
    const { getByTestId } = confirm();
    const onCloseModal = getByTestId("close-button");

    fireEvent.click(onCloseModal);

    expect(props.onClose).toHaveBeenCalled();
  });

  it("Should call onClose when click to close button", () => {
    const { getByTestId } = confirm();
    const onConfirm = getByTestId("confirm-button");

    fireEvent.click(onConfirm);

    expect(props.onConfirm).not.toHaveBeenCalledTimes(1);
  });

  // it("Submits form data correctly", async () => {
  //   const { getByPlaceholderText, getByText } = confirm();
  //   fireEvent.change(getByPlaceholderText("Product Name"), {
  //     target: { value: "Product 1" },
  //   });
  //   fireEvent.change(getByPlaceholderText("Product Price"), {
  //     target: { value: "100" },
  //   });

  //   fireEvent.click(getByText("Confirm"));

  //   expect(mockOnConfirm).toHaveBeenCalledWith({
  //     name: "Product 1",
  //     price: 100,
  //   });
  // });
});
