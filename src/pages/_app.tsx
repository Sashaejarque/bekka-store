import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ShoppingCartProvider } from "../features/ShoppingCart/context/ShoppingCartProvider";
import { ProductListProvider } from "../features/ProducsList/context/ProductsListProvider";
import React from "react";
import { AuthProvider } from "../features/Login/context/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <ProductListProvider>
          <Component {...pageProps} />
        </ProductListProvider>
      </ShoppingCartProvider>
    </AuthProvider>
  );
}
