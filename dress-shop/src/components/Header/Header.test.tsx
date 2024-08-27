import { render } from "@testing-library/react";
import { MainHeader } from ".";
import { BrowserRouter } from "react-router-dom";
// import { useBreakPoints } from "@/hooks";

jest.mock("@/hooks");

describe("MainHeader render", () => {
  const props = {
    children: <>Modal</>,
  };

  const loading = () => {
    return render(
      <BrowserRouter>
        <MainHeader {...props} />
      </BrowserRouter>,
    );
  };

  it("Should render snapshot correctly", () => {
    const component = loading();

    expect(component).toMatchSnapshot();
  });
});

// describe("HeaderContainer render", () => {
//   const headerContainer = () => {
//     return render(
//       <BrowserRouter>
//         <HeaderContainer />
//       </BrowserRouter>,
//     );
//   };

//   it("Render desktop view", () => {
//     useBreakPoints.mockReturnValue({ isLargeThanTablet: true });

//     const component = headerContainer();

//     expect(component).toMatchSnapshot();
//   });
// });
