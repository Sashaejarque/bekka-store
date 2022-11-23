import React from "react";
import { Layout } from "../../templates";
import useCategories from "../../hooks/useCategories";
import CategoriesLayout from "../../templates/Categories/CategoriesLayout";

const JeweleryPage = () => {
  const {
    isLoading,
    products: filteredProducts,
    onChangeSearch: setFilter,
  } = useCategories("jewelery");

  return (
    <Layout>
      <CategoriesLayout
        data={filteredProducts}
        isLoading={isLoading}
        onChangeSearch={setFilter}
      />
    </Layout>
  );
};

export default JeweleryPage;
