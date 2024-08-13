import { render } from "@testing-library/react";

// Components
import ErrorBoundary from ".";

beforeEach(() => {
  jest.spyOn(global.console, "log");
});

describe("Render LoadingIndicator", () => {
  const ThrowError = () => {
    throw new Error("Test");
  };
  it("Should render snapshot correctly", () => {
    expect(
      render(
        <ErrorBoundary>
          <ThrowError />
        </ErrorBoundary>,
      ),
    ).toMatchSnapshot();
  });
});
