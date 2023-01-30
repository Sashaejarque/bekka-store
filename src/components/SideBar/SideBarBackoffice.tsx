import React from "react";
import {
  Box,
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
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import Router from "next/router";
import { useAuth } from "../../features/Login/context/AuthProvider";


const SideBarBackoffice = () => {
  const {
    actions: { signOut },
  } = useAuth();

  const handleLogout = () => {
    signOut();
    Router.push("/");
  };

  return (
    <Drawer variant="permanent" anchor="left">
      <Box sx={styles.drawerContainer}>
        <CssBaseline />
        <Grid container>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
            sx={{ background: "black" }}
          >
            <h2
              style={{
                color: "white",
                cursor: "pointer",
                fontFamily: "TenorSans",
                letterSpacing: 20,
                fontSize: 30,
                textAlign: "center",
              }}
            >
              BEKKA
            </h2>
          </Grid>
          <Grid item xs={12} container justifyContent="center" mt={1}>
            <Box
              sx={{
                width: 200,
                height: 80,
                backgroundColor: "rgba(145, 158, 171, 0.12)",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography>Foto</Typography>
              <Typography fontWeight="bold">Sasha Ejarque</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <List>
            <ListItem onClick={() => Router.push('/admin')}>
                <ListItemButton>
                  <ListItemIcon>
                    <AutoGraphOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem onClick={() => Router.push('/admin/products/list')}>
                <ListItemButton>
                  <ListItemIcon>
                    <ShoppingCartOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Productos" />
                </ListItemButton>
              </ListItem>
              <ListItem onClick={() => Router.push('/admin/products/add')}>
                <ListItemButton>
                  <ListItemIcon>
                    <AddShoppingCartOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add producto" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <List>
            <ListItem onClick={handleLogout}>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Box>
    </Drawer>
  );
};

const styles = {
    drawerContainer: {
      width: 240,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  };
  

export default SideBarBackoffice;
