import React from "react";
import { Layout } from "../../templates";
import useCategories from "../../hooks/useCategories";
import CategoriesLayout from "../../templates/Categories/CategoriesLayout";

const WomenClothing = () => {
  const {
    isLoading,
    products: filteredProducts,
    onChangeSearch: setFilter,
  } = useCategories("womenClothing");

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

export default WomenClothing;
