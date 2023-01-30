import { Button, Drawer, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useAuth } from "../Login/context/AuthProvider";
import LayoutPrivateRoute from "../../templates/Layout/LayoutPrivateRoute";
import Router from "next/router";

const BackOfficeHome = () => {
  const [open, setOpen] = React.useState(true);
  const {
    actions: { signOut },
  } = useAuth();

  const handleLogout = () => {
    signOut();
    Router.push("/");
  };
  return (
    <LayoutPrivateRoute>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item xs={12}>
          <Typography variant="h5" textAlign="left">Hola, bienvenido devuelta</Typography>
        </Grid>
      </Grid>
    </LayoutPrivateRoute>
  );
};

export default BackOfficeHome;
