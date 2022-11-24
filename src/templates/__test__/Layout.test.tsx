import { render } from "@testing-library/react";
import { expect, it, describe } from "@jest/globals";
import React from "react";
import Layout from "../Layout/Layout";
import { ProductListProvider } from "../../features/ProducsList/context/ProductsListProvider";
import { ShoppingCartProvider } from "../../features/ShoppingCart/context/ShoppingCartProvider";

describe("Layout", () => {
  it("should render correctly", () => {
    const component = render(
      <ShoppingCartProvider>
        <ProductListProvider>
          <Layout>
            <h1 data-testid="children">test</h1>
          </Layout>
        </ProductListProvider>
      </ShoppingCartProvider>
    );
    expect(component).not.toBeNull();
  });

  it("should render correctly the children", () => {
    const component = render(
      <ShoppingCartProvider>
        <ProductListProvider>
          <Layout>
            <h1 data-testid="children">test</h1>
          </Layout>
        </ProductListProvider>
      </ShoppingCartProvider>
    );

    const { getByTestId } = component;
    const children = getByTestId("children");
    expect(children).toBeTruthy();
    expect(children.textContent).toBe("test");
    expect(children.tagName).toBe("H1");
  });

  it("should render correctly the header", () => {
    const component = render(
      <ShoppingCartProvider>
        <ProductListProvider>
          <Layout>
            <h1 data-testid="children">test</h1>
          </Layout>
        </ProductListProvider>
      </ShoppingCartProvider>
    );

    const { getByTestId } = component;
    const header = getByTestId("header");
    expect(header).toBeTruthy();
    expect(header.tagName).toBe("DIV");
  });
});
