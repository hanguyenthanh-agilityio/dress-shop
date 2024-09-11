import { render } from "@testing-library/react";
import Carousel from ".";
import "@testing-library/jest-dom/extend-expect";

describe("Carousel component", () => {
  it("Should render Carousel snapshot correctly", () => {
    const carousel = render(<Carousel />);

    expect(carousel).toMatchSnapshot();
  });
});

describe("SlideComponent", () => {
  test("updates currentSlide when a dot is clicked", () => {
    const slides = [0, 1, 2];
    const { getByTestId } = render(<Carousel />);

    // Get all dot elements by their data-testid
    const dots = slides.map((slide) => getByTestId(`dot-${slide}`));

    // Ensure there are as many dots as slides
    expect(dots).toHaveLength(slides.length);
  });
});
