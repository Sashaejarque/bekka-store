import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import InputPassword from "../../components/InputPassword/InputPassword";
import { useAuth } from "./context/AuthProvider";
import Router from "next/router";

const LoginUI = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const {
    actions: { signIn },
  } = useAuth();

  const handleSubmit = () => {
    try {
      signIn(formState.email, formState.password);
     //TODO: Handle response. Si es incorrecto el passwor o user que no haga el redirect
      Router.push('/');
    } catch (error) {
      console.log(error);
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
            Iniciar sesión
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
            id="email"
            label="Email"
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
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
          <InputPassword
            onChange={(e: { target: { value: any } }) =>
              setFormState({ ...formState, password: e.target.value })
            }
            state={formState.password}
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
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginUI;
