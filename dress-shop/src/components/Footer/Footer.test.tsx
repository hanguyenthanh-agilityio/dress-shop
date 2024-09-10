import { render } from "@testing-library/react";
import Footer from ".";
import { MemoryRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import CHAKRA_THEME_DEFAULT from "@/themes/chakra";
// import colors from "@/themes/color";

describe("Footer component", () => {
  const theme = () => {
    return render(
      <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </ChakraProvider>,
    );
  };

  it("Should render Footer snapshot correctly", () => {
    const footer = theme();

    expect(footer).toMatchSnapshot();
  });

  // it("Should render ", () => {
  //   const { getByTestId } = theme();
  //   const boxElement = getByTestId("theme-box");

  //   expect(boxElement).toHaveStyle(`bg: ${colors.background.dark}`);
  //   expect(boxElement).toHaveStyle(`color: ${colors.text.default}`);
  // });
});
