import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ShoppingCartProvider } from "../features/ShoppingCart/context/ShoppingCartProvider";
import { ProductListProvider } from "../features/ProducsList/context/ProductsListProvider";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <ProductListProvider>
        <Component {...pageProps} />
      </ProductListProvider>
    </ShoppingCartProvider>
  );
}
