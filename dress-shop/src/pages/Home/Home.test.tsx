import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Components
import Home from ".";

describe("Home component", () => {
  it("Should render Home snapshot correctly", () => {
    const queryClient = new QueryClient();
    const home = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(home).toMatchSnapshot();
  });
});
