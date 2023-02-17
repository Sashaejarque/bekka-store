import { Box } from '@mui/material';
import React from 'react';
import { useProducts } from './context/ProductProvider';
import AddProductForm from './form/AddProductForm';
import { prepareToJson } from './utils/prepareToJson';

interface CreateProductFormValues {
  name: string;
  price: number;
  stock: number;
  image: FileList;
}
function AddProduct() {
  const {
    state: { loading },
    actions: { createProduct },
  } = useProducts();

  const handleCreateProductFormSubmit = (data: CreateProductFormValues) => {
    const formData = prepareToJson(data);
    try {
      createProduct(
        formData.name,
        formData.price,
        formData.stock,
        formData.image
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AddProductForm
        loading={loading}
        onSubmit={handleCreateProductFormSubmit}
      />
    </Box>
  );
}

export default AddProduct;
