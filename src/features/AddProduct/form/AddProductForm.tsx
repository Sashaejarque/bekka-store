import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import ButtonWithLoading from "../../../components/Button/ButtonWithLoading";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup.string().email().required(),
    price: yup.number().required(),
    stock: yup.number().required(),
  });

const AddProductForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });

      // TODO: tipar data que llega
      const onSubmitHandler = (data: any) => {
        console.log(data);
        reset();
      };

    return(
        <form onSubmit={handleSubmit(onSubmitHandler)}>
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
            sx={{ width: "100%", margin: 2 }}
            {...register("name")}
          />
        {/* @ts-ignore */}
          <p style={{ color: 'red', fontSize: 10 }}>{errors.name?.message}</p>
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
            sx={{ width: "100%", margin: 2 }}
            {...register("price")}
          />
           {/* @ts-ignore */}
          <p style={{ color: 'red', fontSize: 10 }}>{errors.price?.message}</p>
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
            sx={{ width: "100%" }}
            {...register("stock")}
          />
          {/* @ts-ignore */}
          <p style={{ color: 'red', fontSize: 10}}>{errors.name?.message}</p>
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
            /* onChange={async (e) => {
              const target = e.target as HTMLInputElement;
              const file: File = (target.files as FileList)[0];
              setFormState({ ...formState, image: file });
            }} */
          />
        </Grid>

        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
            <button type="submit">submit</button>
          {/* <ButtonWithLoading title="Agregar producto" onClick={() => handleSubmit()} loading={loading} /> */}
        </Grid>
      </Grid>
        </form>
    )
};

export default AddProductForm;
