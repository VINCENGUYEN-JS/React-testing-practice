import { render, screen, fireEvent } from "@testing-library/react";
import { replaceCamelWithSpaces } from "./App";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", {
    name: "Change to blue",
  });

  expect(colorBtn).toHaveStyle({
    backgroundColor: "red",
  });

  fireEvent.click(colorBtn);
  expect(colorBtn).toHaveStyle({
    backgroundColor: "blue",
  });

  expect(colorBtn.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to blue",
  });

  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox", {
    name: "Disable button",
  });

  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  fireEvent.click(checkBox);
  expect(button).toBeDisabled();
  fireEvent.click(checkBox);
  expect(button).toBeEnabled();
});

test("Disable button has gray background and reverts to red", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const colorBtn = screen.getByRole("button", {
    name: "Change to blue",
  });

  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({
    backgroundColor: "gray",
  });

  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({
    backgroundColor: "red",
  });
});

describe("spaces before camel-case capital letter", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
