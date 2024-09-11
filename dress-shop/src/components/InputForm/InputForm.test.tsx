// import { render } from "@testing-library/react";
import { render } from "@testing-library/react";
import FormInput from ".";
import { useForm } from "react-hook-form";
import { ChakraProvider } from "@chakra-ui/react";
import { ERROR_MESSAGES } from "@/constants";

// const mockRegister = jest.fn();

const MockForm = ({ isInvalid = false }) => {
  const {
    register,
    // formState: { errors },
  } = useForm();

  return (
    <form>
      <FormInput
        label="Name"
        inputName="name"
        register={register}
        isInvalid={isInvalid}
        type="text"
      />
    </form>
  );
};

const component = () => {
  return render(
    <ChakraProvider>
      <MockForm isInvalid={true} />
    </ChakraProvider>,
  );
};

const { getByText, queryByText } = component();

describe("Render Snapshot", () => {
  it("Should render snapshot correctly", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("MyFormField Component", () => {
  // it("renders the form field and label", () => {
  //   expect(getByLabelText(/name/i)).toBeInTheDocument();
  //   expect(getByText(/name/i)).toBeInTheDocument();
  // });

  it("shows error message when isInvalid is true", () => {
    render(
      <ChakraProvider>
        <MockForm isInvalid={true} />
      </ChakraProvider>,
    );

    expect(getByText(ERROR_MESSAGES.FIELD_REQUIRED)).toBeInTheDocument();
  });

  it("does not show error message when isInvalid is false", () => {
    expect(queryByText(ERROR_MESSAGES.FIELD_REQUIRED)).toBeNull();
  });

  // test("calls register function with correct arguments", () => {
  //   render(
  //     <ChakraProvider>
  //       <MockForm />
  //     </ChakraProvider>,
  //   );

  //   expect(mockRegister).toHaveBeenCalledWith();
  // });
});
