import React from "react";
import { Layout } from "../templates";
import CategoriesCarousel from "../features/CategoriesCarousel/CategoriesCarousel";
import ProductsList from "../features/ProducsList/ProductsList";

const IndexPage = () => {
  return (
    <Layout>
      <CategoriesCarousel />
      <ProductsList />
    </Layout>
  );
};

export default IndexPage;
