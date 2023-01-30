/* eslint-disable @next/next/no-img-element */
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Header from "../../components/Header/Header";
import Router from "next/router";
import { useAuth } from "../../features/Login/context/AuthProvider";
import SideBarBackoffice from "../../components/SideBar/SideBarBackoffice";
import useResponsiveScreen from "../../hooks/useResponsiveScreen";

const LayoutPrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);
  const {
    state: { isLogged },
  } = useAuth();
  const { width } = useResponsiveScreen();

  useEffect(() => {
    const token = sessionStorage.getItem("user-token");
    if (token || isLogged) {
      setLogged(true);
    }
    setLoading(false);
  }, [isLogged]);

  return (
    <Box sx={styles.container}>
      <SideBarBackoffice />
      <Grid container mt={12} paddingX={4}>
        {loading ? (
          <Grid container item xs={12} justifyContent="center">
            <CircularProgress />
          </Grid>
        ) : logged ? (
          <div style={{ width: width - 240, marginLeft: 240 }}>
            {children}
          </div>
        ) : (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <h1>Not authorized</h1>
            <h4>
              La página a la que estás intentando acceder es un área restringida
            </h4>
            <Button onClick={() => Router.push("/")}>Ir al home</Button>
          </Grid>
        )}
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
