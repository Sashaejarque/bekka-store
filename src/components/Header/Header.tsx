/* eslint-disable @next/next/no-img-element */
import { Badge, Grid, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useMemo, useState } from "react";
import useResponsiveScreen from "../../hooks/useResponsiveScreen";
import { useShoppingCart } from "../../features/ShoppingCart/context/ShoppingCartProvider";
import ShoppingCart from "../../features/ShoppingCart/ShoppingCart";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const {
    state: { items },
  } = useShoppingCart();

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  const goToHome = () => {
    window.location.href = "/";
  };
  const totalItemsCart = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);
  return (
    <Stack
      sx={styles.container}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={4}
      data-testid="header"
    >
      <div />
      <Grid>
        {/* <img
          src="https://i0.wp.com/firstclose.com/wp-content/uploads/2022/03/cropped-firstclose-logo-header.png?fit=504%2C115&ssl=1"
          alt="FirstClose"
          style={styles.img}
          onClick={() => goToHome()}
          data-testid="logo"
        /> */}
        <h2 style={{ color: 'white', cursor: "pointer"}} onClick={() => goToHome()}>LOGO</h2>
      </Grid>
      <Grid>
        <Badge badgeContent={totalItemsCart} color="error">
          <IconButton
            aria-label="add to shopping cart"
            onClick={() => toggleDrawer()}
            data-testid="shopping-cart-button"
          >
            <ShoppingCartIcon color="primary" />
          </IconButton>
        </Badge>
      </Grid>
      <ShoppingCart
        open={drawer}
        onClose={toggleDrawer}
        data-testid="shopping-cart"
      />
    </Stack>
  );
};

const styles = {
  container: {
    width: "100%",
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

export default Header;
