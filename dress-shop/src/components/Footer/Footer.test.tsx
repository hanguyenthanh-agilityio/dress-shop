import { render } from "@testing-library/react";
import Footer from ".";
import { MemoryRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import CHAKRA_THEME_DEFAULT from "@/themes/chakra";
// import colors from "@/themes/color";
// import colors from "@/themes/color";

const theme = () => {
  return render(
    <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    </ChakraProvider>,
  );
};

describe("Footer component", () => {
  it("Should render Footer snapshot correctly", () => {
    const footer = theme();

    expect(footer).toMatchSnapshot();
  });
});

// describe("ThemedBox Component", () => {
//   it("renders the Box with correct styles and content", () => {
//     const { getByTestId } = theme();

//     const boxElement = getByTestId("theme-box");

//     // Assertions
//     expect(boxElement).toBeInTheDocument();
//     expect(boxElement).toHaveTextContent("Themed Content");
//     // Check styles. Note: exact color values depend on your Chakra theme configuration
//     expect(boxElement).toHaveStyle(
//       `background-color: ${colors.background.dark}`,
//     );
//     expect(boxElement).toHaveStyle(`color: ${colors.text.default}`);
//   });
// });
