import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonWithLoading from "../../components/Button/ButtonWithLoading";
import { useProducts } from "./context/ProductProvider";
import AddProductForm from "./form/AddProductForm";
import { uploadImage } from "./services/uploadImage";

const AddProduct = () => {
  const { state: { loading } } = useProducts();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AddProductForm loading={loading} />
    </Box>
  );
};

export default AddProduct;
