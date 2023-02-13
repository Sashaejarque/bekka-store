import React from 'react';
import AddProduct from '../../../features/AddProduct/AddProduct';
import LayoutPrivateRoute from '../../../templates/Layout/LayoutPrivateRoute';

function AddProductPage() {
  return (
    <LayoutPrivateRoute>
      <AddProduct />
    </LayoutPrivateRoute>
  );
}

export default AddProductPage;
