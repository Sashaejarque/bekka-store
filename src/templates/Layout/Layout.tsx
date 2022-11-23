import React, { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../../components/Header/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={styles.container}>
      <Header />
      <Grid container spacing={6} mt={0}>
        {children}
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

export default Layout;
