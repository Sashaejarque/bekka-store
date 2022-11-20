/* eslint-disable @next/next/no-img-element */
import { Badge, Divider, Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { useMemo, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerCart from "../DrawerCart/DrawerCart";
import useResponsiveScreen from "../../hooks/useResponsiveScreen";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const styles = {
  container: {
    height: 80,
    backgroundColor: "black",
    position: "fixed",
    zIndex: 1000,
  },
  img: {
    maxHeigth: 70,
    maxWidth: 200,
    filter: "brightness(0) invert(1)",
    cursor: "pointer",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
};
const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const { cart } = useShoppingCart();
  const { width } = useResponsiveScreen();
  const responsiveWidth = useMemo(() => width * 0.02, [width]);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  const goToHome = () => {
    window.location.href = "/";
  };
  const widthForIcon = useMemo(() => {
    if (width < 600) {
      return 2;
    }
    return 6;
  }, [width]);
  const totalItemsCart = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);
  return (
    <>
      <Grid
        container
        sx={styles.container}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          item
          xs={10}
          alignItems="center"
          justifyContent="center"
          sx={{ paddingLeft: responsiveWidth }}
        >
          <img
            src="https://i0.wp.com/firstclose.com/wp-content/uploads/2022/03/cropped-firstclose-logo-header.png?fit=504%2C115&ssl=1"
            alt="FirstClose"
            style={styles.img}
            onClick={() => goToHome()}
          />
        </Grid>
        <Grid
          container
          item
          xs={2}
          alignItems="center"
          justifyContent="flex-end"
          paddingRight={widthForIcon}
          mt={1}
        >
          <Badge badgeContent={totalItemsCart} color="error">
            <IconButton
              aria-label="add to shopping cart"
              onClick={() => toggleDrawer()}
            >
              <ShoppingCartIcon color="primary" />
            </IconButton>
          </Badge>
        </Grid>
      </Grid>
      <DrawerCart open={drawer} onClose={toggleDrawer} />
    </>
  );
};

export default Header;
