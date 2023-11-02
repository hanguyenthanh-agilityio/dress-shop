import { render, screen } from "@testing-library/react";
import App from "../App"

it("Should have Hello world", () => {
  render(<App />);
  const message = screen.queryAllByText(/Hello World/i);
  expect(message).toBeVisible()
})
