import { fireEvent, render } from "@testing-library/react";
import { expect, it, describe } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ShoppingCartProvider } from "../../features/ShoppingCart/context/ShoppingCartProvider";

const mockItem = {
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
};

describe("ProductCard", () => {
  it("should render the product card", () => {
    const component = render(
      <ShoppingCartProvider>
        <ProductCard item={mockItem} />
      </ShoppingCartProvider>
    );
    expect(component).not.toBeNull();
  });
  it("should render the product image", () => {
    const { getByTestId } = render(
      <ShoppingCartProvider>
        <ProductCard item={mockItem} />
      </ShoppingCartProvider>
    );
    const image = getByTestId("image");
    expect(image).toBeTruthy();
  });
  it("should render the product title", () => {
    const { getByTestId } = render(
      <ShoppingCartProvider>
        <ProductCard item={mockItem} />
      </ShoppingCartProvider>
    );
    const title = getByTestId("titleProduct");
    expect(title.textContent).toBe(mockItem.title);
    expect(title.tagName).toBe("P");
  });
  it("should render the product price", () => {
    const { getByTestId } = render(
      <ShoppingCartProvider>
        <ProductCard item={mockItem} />
      </ShoppingCartProvider>
    );
    const price = getByTestId("priceProduct");
    expect(price.textContent).toBe(`$${mockItem.price}`);
    expect(price.tagName).toBe("P");
  });
  it("should render correctly the function add product", () => {
    const { getByTestId } = render(
      <ShoppingCartProvider>
        <ProductCard item={mockItem} />
      </ShoppingCartProvider>
    );
    const button = getByTestId("addButtonProduct");
    expect(button.textContent).toBe("Add to cart");
    expect(button.tagName).toBe("BUTTON");

    fireEvent.click(button);
    const counter = getByTestId("counter");
    expect(counter.textContent).toBe("1");
  });
});
