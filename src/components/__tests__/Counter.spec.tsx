import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it, expect } from "vitest";
import { store } from "../../store"; // Adjust the path if needed
import Counter from "../Counter";

describe("Counter Component", () => {
  it("should render the counter with initial value", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    expect(screen.getByText(/Counter:/i)).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("should increment the counter when the 'plus' button is clicked", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    const incrementButton = screen.getByRole("button", { name: /plus/i });

    fireEvent.click(incrementButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should decrement the counter when the 'minus' button is clicked", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    const decrementButton = screen.getByRole("button", { name: /minus/i });

    fireEvent.click(decrementButton);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});
