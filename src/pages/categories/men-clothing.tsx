import React from "react";
import { Layout } from "../../templates";
import CategoriesLayout from "../../templates/Categories/CategoriesLayout";
import useCategories from "../../hooks/useCategories";

const MenClothing = () => {
  const {
    isLoading,
    products: filteredProducts,
    onChangeSearch: setFilter,
  } = useCategories("menClothing");

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

export default MenClothing;
