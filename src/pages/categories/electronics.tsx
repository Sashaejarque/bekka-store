import React from "react";
import { Layout } from "../../templates";
import CategoriesLayout from "../../templates/Categories/CategoriesLayout";
import useCategories from "../../hooks/useCategories";

const Electronic = () => {
  const {
    isLoading,
    products: filteredProducts,
    onChangeSearch: setFilter,
  } = useCategories("electronics");

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

export default Electronic;
