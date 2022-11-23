import React, { useEffect } from "react";
import { Layout } from "../templates";
import CategoriesCarousel from "../features/CategoriesCarousel/CategoriesCarousel";
import ProductsList from "../features/ProducsList/ProductsList";
import { useShoppingCart } from "../features/ShoppingCart/context/ShoppingCartProvider";

const IndexPage = () => {
  const {
    actions: { getItemsFromLocalStorage },
  } = useShoppingCart();

  useEffect(() => {
    getItemsFromLocalStorage();
  }, [getItemsFromLocalStorage]);

  return (
    <Layout>
      <CategoriesCarousel />
      <ProductsList />
    </Layout>
  );
};

export default IndexPage;
