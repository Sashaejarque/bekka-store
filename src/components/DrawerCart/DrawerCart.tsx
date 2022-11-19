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
    () => (width <= 800 ? width * 0.6 : width * 0.4),
    [width]
  );
  const responsiveHeight = useMemo(() => height, [height]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => onClose()}
      transitionDuration={500}
      className="MuiDrawer-paperAnchorRigth"
    >
      <div style={{ minWidth: responsiveWidth, height: responsiveHeight }}>
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
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          {cart.map((item) => (
            <CardCart
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </Grid>
      </div>
    </Drawer>
  );
};

export default DrawerCart;
