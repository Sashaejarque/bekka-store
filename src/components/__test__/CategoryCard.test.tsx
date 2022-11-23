import { render } from "@testing-library/react";
import { expect, it, describe } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { ShoppingCartProvider } from "../../features/ShoppingCart/context/ShoppingCartProvider";
import CategoryCard from "../CategoryCard/CategoryCard";

describe("CategoryCard", () => {
  it("should render CategoryCard component", () => {
    const component = render(<CategoryCard categoryName="electronics" />);
    expect(component).not.toBeNull();
  });

  it("should render the category name", () => {
    const { getByText } = render(
      <ShoppingCartProvider>
        <CategoryCard categoryName="electronics" />
      </ShoppingCartProvider>
    );
    expect(getByText("Electronics")).toBeTruthy();
  });
});
