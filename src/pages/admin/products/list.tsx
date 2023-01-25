import React from "react";
import ProductListBackoffice from "../../../features/ProductListBackoffice/ProductListBackoffice";
import LayoutPrivateRoute from "../../../templates/Layout/LayoutPrivateRoute";

const ProductsListPage = () => {
  return (
    <LayoutPrivateRoute>
      <ProductListBackoffice />
    </LayoutPrivateRoute>
  );
};

export default ProductsListPage;