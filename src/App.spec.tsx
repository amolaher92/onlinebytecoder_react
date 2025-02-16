import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "./App";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the main heading", () => {
    expect(screen.getByRole("heading", { level: 1, name: /Vite \+ React/i })).toBeInTheDocument();
  });

  it("displays the Vite and React logos", () => {
    expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
    expect(screen.getByAltText("React logo")).toBeInTheDocument();
  });

  it("renders the initial count", () => {
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
  });

  it("increments the counter when the button is clicked", () => {
    const button = screen.getByRole("button", { name: /count is 0/i });

    fireEvent.click(button);
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText(/count is 2/i)).toBeInTheDocument();
  });

  it("renders instructional text", () => {
    expect(screen.getByText((content) => content.includes("Edit src/App.tsx"))).toBeInTheDocument();
  });

  it("renders the paragraph with link instructions", () => {
    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/i),
    ).toBeInTheDocument();
  });
});
