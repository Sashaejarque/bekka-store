import React, { FC, useMemo } from "react";
import Drawer from "@mui/material/Drawer";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useResponsiveScreen from "../../hooks/useResponsiveScreen";
import CardCart from "../CardCart/CardCart";
import { useShoppingCart } from "../../context/ShoppingCartContext";

interface Props {
  open: boolean;
  onClose: () => void;
}
const styles = {
  title: {
    paddingLeft: 1.3,
  },
  divider: {
    width: "92%",
    marginTop: 2,
  },
};
const DrawerCart: FC<Props> = ({ open, onClose }) => {
  const { cart } = useShoppingCart();
  const { width, height } = useResponsiveScreen();
  const responsiveWidth = useMemo(
    () => (width <= 800 ? width : width * 0.4),
    [width]
  );
  const responsiveHeight = useMemo(() => height, [height]);

  const totalCart = useMemo(() => {
    return cart.reduce((acc, item) => {
      if (item.quantity != 0) {
        return acc + item.price * item.quantity;
      } else {
        return acc + item.price;
      }
    }, 0);
  }, [cart]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => onClose()}
      transitionDuration={500}
      className="MuiDrawer-paperAnchorRigth"
    >
      <div
        style={{
          maxWidth: responsiveWidth,
          minHeight: responsiveHeight,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          mt={2}
          mr={2}
        >
          <Grid item xs={12} ml={2}>
            <IconButton onClick={() => onClose()}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} ml={2} mt={2}>
            <Typography variant="h5" sx={styles.title}>
              My shopping cart
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <Divider sx={styles.divider} />
          </Grid>
          {cart.length === 0 && (
            <Grid item xs={12} ml={2} mt={10}>
              <Typography
                textAlign="center"
                sx={{ fontSize: 20, fontWeight: "bold" }}
              >
                Shopping cart is empty
              </Typography>
            </Grid>
          )}
          {cart.length !== 0 &&
            cart.map((item) => (
              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                key={item.id}
              >
                <CardCart
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              </Grid>
            ))}
        </Grid>
        {cart.length > 0 && (
          <>
            <Grid container sx={{ height: 140 }}>
              <Grid container item xs={12} justifyContent="center">
                <Divider sx={[styles.divider, { marginBottom: 2 }]} />
              </Grid>
              <Grid
                container
                item
                justifyContent="space-between"
                alignItems="center"
                mr={6}
                ml={6}
                mb={2}
              >
                <Typography variant="h5" sx={styles.title}>
                  Total:
                </Typography>
                <Typography variant="h5">
                  ${totalCart.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </Drawer>
  );
};

export default DrawerCart;
