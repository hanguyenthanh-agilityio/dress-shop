import { fireEvent, render } from "@testing-library/react";
import Categories from ".";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { useCategoryUtils } from "@/utils";

// Mock the category utilities
jest.mock("../../utils", () => ({
  useCategoryUtils: jest.fn(),
}));

const categories = () => {
  return render(
    <MemoryRouter>
      <Categories />
    </MemoryRouter>,
  );
};

describe("Categories component", () => {
  it("Should render Categories snapshot correctly", () => {
    expect(categories).toMatchSnapshot();
  });

  it("should call category.action with correct value on button click", () => {
    const mockHandleClickCategories = jest.fn(); // Mock the action function

    // Mock the categories data
    const mockCategories = [
      {
        id: "1",
        img: "img1.png",
        alt: "Image 1",
        label: "Category 1",
        action: mockHandleClickCategories,
        value: "category1",
      },
      {
        id: "2",
        img: "img2.png",
        alt: "Image 2",
        label: "Category 2",
        action: mockHandleClickCategories,
        value: "category2",
      },
    ];

    (useCategoryUtils as jest.Mock).mockReturnValue({
      categories: mockCategories,
    });

    const { getByText } = categories();

    const firstCategory = getByText("Category 1");

    fireEvent.click(firstCategory);

    // Expect the mock function to have been called with 'category1'
    expect(mockHandleClickCategories).toHaveBeenCalledWith("category1");
  });
});
