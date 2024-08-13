import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

// Components
import FormModal from ".";

describe("FormModal render", () => {
  const props = {
    modalTitle: "Product",
    buttonLabel: "Confirm",
    onClose: jest.fn(),
    onConfirm: jest.fn(),
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
});
