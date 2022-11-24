import { fireEvent, render } from "@testing-library/react";
import { expect, it, describe } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Header from "../Header/Header";
import { ShoppingCartProvider } from "../../features/ShoppingCart/context/ShoppingCartProvider";

describe("Header", () => {
  it("should render the header", () => {
    const component = render(
      <ShoppingCartProvider>
        <Header />
      </ShoppingCartProvider>
    );
    expect(component).not.toBeNull();
  });

  it("should render the logo", () => {
    const { getByTestId } = render(
      <ShoppingCartProvider>
        <Header />
      </ShoppingCartProvider>
    );
    const logo = getByTestId("logo");
    expect(logo).toBeTruthy();
  });

  it("should render the shopping cart", () => {
    const { getByTestId } = render(
      <ShoppingCartProvider>
        <Header />
      </ShoppingCartProvider>
    );
    const button = getByTestId("shopping-cart-button");
    fireEvent.click(button);

    const shoppingCart = getByTestId("shopping-cart");
    expect(shoppingCart).toBeTruthy();
  });
});
