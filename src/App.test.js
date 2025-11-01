import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders site brand", () => {
  render(<App />);
  const brand = screen.getByText(/siddhant.exe/i);
  expect(brand).toBeInTheDocument();
});
