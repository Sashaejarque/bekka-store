import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { ProductListProvider } from "../features/ProducsList/context/ProductsListProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <ProductListProvider>
        <Component {...pageProps} />
      </ProductListProvider>
    </ShoppingCartProvider>
  );
}
