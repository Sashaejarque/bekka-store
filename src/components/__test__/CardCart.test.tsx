import { render } from "@testing-library/react";
import { expect, it, describe } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import CardCart from "../CardCart/CardCart";
import { ShoppingCartProvider } from "../../features/ShoppingCart/context/ShoppingCartProvider";

const mockItem = {
  product: {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  quantity: 1,
};

describe("CardCart", () => {
  it("should render CardCart component", () => {
    const component = render(
      <ShoppingCartProvider>
        <CardCart item={mockItem} />
      </ShoppingCartProvider>
    );
    expect(component).not.toBeNull();
  });
  it("it should render the items from mockItem", () => {
    const { getByText } = render(
      <ShoppingCartProvider>
        <CardCart item={mockItem} />
      </ShoppingCartProvider>
    );
    expect(
      getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    ).toBeTruthy();
    expect(getByText("$109.95")).toBeTruthy();
  });

  it("should render the image", () => {
    const { getByTestId } = render(
      <ShoppingCartProvider>
        <CardCart item={mockItem} />
      </ShoppingCartProvider>
    );
    expect(getByTestId("image-cardcart")).toBeTruthy();
  });
});
