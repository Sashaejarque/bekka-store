import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddProduct = () => {
  const [formState, setFormState] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
  });

  const handleSubmit = async () => {};

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
            onClick={() => console.log("FUNCANDO", formState)}
          >
            Agregar producto
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProduct;
