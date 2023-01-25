import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ShoppingCartProvider } from "../features/ShoppingCart/context/ShoppingCartProvider";
import { ProductListProvider } from "../features/ProducsList/context/ProductsListProvider";
import React from "react";
import { AuthProvider } from "../features/Login/context/AuthProvider";
import { ToastProvider } from "use-toast-mui";
import { ProductProvider } from "../features/AddProduct/context/ProductProvider";
import { ProductsListBackofficeProvider } from "../features/ProductListBackoffice/context/ProductListBackofficeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <AuthProvider>
        <ProductsListBackofficeProvider>
          <ProductProvider>
            <ShoppingCartProvider>
              <ProductListProvider>
                <Component {...pageProps} />
              </ProductListProvider>
            </ShoppingCartProvider>
          </ProductProvider>
        </ProductsListBackofficeProvider>
      </AuthProvider>
    </ToastProvider>
  );
}
