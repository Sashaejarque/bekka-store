import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { createProduct } from "./services/createProduct";
import { uploadImage } from "./services/uploadImage";

interface IFormState {
  name: string;
  price: number;
  stock: number;
  image: File | null;
}

const AddProduct = () => {
  const [formState, setFormState] = useState<IFormState>({
    name: "",
    price: 0,
    stock: 0,
    image: null,
  });

  const handleSubmit = async () => {
    try {
      const { name, price, stock, image } = formState;

      if (!image) return;
      const imageUploaded: string = await uploadImage(image);
      const product = {
        name,
        price,
        stock,
        image: imageUploaded,
      };
      const postProduct = await createProduct(product);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      mt={4}
    >
      <Grid container item xs={12} md={6}>
        <Grid item xs={12}>
          <Typography
            sx={{ fontWeight: 600, fontSize: 40, textAlign: "center" }}
          >
            Agregar producto
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            id="name"
            label="Nombre del producto"
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            sx={{ width: "100%", margin: 2 }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            id="price"
            label="Price"
            type="number"
            onChange={(e) =>
              setFormState({ ...formState, price: Number(e.target.value) })
            }
            sx={{ width: "100%", margin: 2 }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            id="stock"
            label="Cantidad de stock"
            type="number"
            onChange={(e) =>
              setFormState({ ...formState, stock: Number(e.target.value) })
            }
            sx={{ width: "100%", margin: 2 }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name="upload-photo"
            type="file"
            sx={{ width: "100%", margin: 2 }}
            onChange={async (e) => {
              const target = e.target as HTMLInputElement;
              const file: File = (target.files as FileList)[0];
              setFormState({ ...formState, image: file });
            }}
          />
        </Grid>

        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="contained"
            sx={{ width: "100%", margin: 2 }}
            onClick={() => handleSubmit()}
          >
            Agregar producto
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProduct;
