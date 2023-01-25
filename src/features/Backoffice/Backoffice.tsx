import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useAuth } from "../Login/context/AuthProvider";
import LayoutPrivateRoute from "../../templates/Layout/LayoutPrivateRoute";
import Router from "next/router";

const BackOfficeHome = () => {
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
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item>
          <Typography variant="h1">Dashboard</Typography>
        </Grid>
        <Grid item m={4}>
          <Link href="/admin/products/add">Add product</Link>
        </Grid>
        <Grid item m={4}>
          <Link href="/admin/products/list">Products</Link>
        </Grid>
        <Grid item m={4}>
          <Button variant="contained" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </Grid>
      </Grid>
    </LayoutPrivateRoute>
  );
};

export default BackOfficeHome;
