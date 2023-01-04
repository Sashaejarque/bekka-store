import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../../components/Header/Header";
import Router from 'next/router'

const LayoutPrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("user-token");
    if (!token) {
      setTimeout(() => {
        Router.push('/admin/login')
      }, 2000);
    } else {
      setIsLogged(true);
    }
  }, []);

  return (
    <Box sx={styles.container}>
      <Header />
      <Grid container mt={12} paddingX={4}>
        {isLogged ? children : <h1>Not authorized</h1>}
      </Grid>
    </Box>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    overflow: "hidden",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
};

export default LayoutPrivateRoute;
