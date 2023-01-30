import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonWithLoading from "../../components/Button/ButtonWithLoading";
import { useProducts } from "./context/ProductProvider";
import { uploadImage } from "./services/uploadImage";

interface IFormState {
  name: string;
  price: string;
  stock: string;
  image: File | null;
}

const AddProduct = () => {
  const { actions: { createProduct }, state: { loading } } = useProducts();
  const [formState, setFormState] = useState<IFormState>({
    name: "",
    price: "",
    stock: "",
    image: null,
  });

  const handleSubmit = async () => {
    try {
      createProduct(formState.name, formState.price, formState.stock, formState.image);
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
      /* mt={4} */
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
              setFormState({ ...formState, price: e.target.value })
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
              setFormState({ ...formState, stock: e.target.value })
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
          <ButtonWithLoading title="Agregar producto" onClick={() => handleSubmit()} loading={loading} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProduct;
