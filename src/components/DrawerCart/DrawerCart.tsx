/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useMemo, useState } from "react";
import Drawer from "@mui/material/Drawer";
import {
  Accordion,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useResponsiveScreen from "../../hooks/useResponsiveScreen";
import CardCart from "../CardCart/CardCart";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import AccordionComponent from "../Acorddion/Accordion";

interface Props {
  open: boolean;
  onClose: () => void;
}
const styles = {
  title: {
    paddingLeft: 1.3,
  },
  divider: {
    width: "100%",
    marginTop: 2,
  },
  button: {
    width: "90%",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "orange",
    },
  },
};
const DrawerCart: FC<Props> = ({ open, onClose }) => {
  const { cart } = useShoppingCart();
  const [inputDiscount, setInputDiscount] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(0);
  const [total, setTotal] = useState(0);
  const { width, height } = useResponsiveScreen();
  const responsiveWidth = useMemo(
    () => (width <= 800 ? width : width * 0.4),
    [width]
  );
  const responsiveHeight = useMemo(() => height, [height]);

  /* const totalCart = useMemo(() => {
    return cart.reduce((acc, item) => {
      if (item.quantity != 0) {
        return acc + item.price * item.quantity;
      } else {
        return acc + item.price;
      }
    }, 0);
  }, [cart]); */
  const reacalculateTotal = () => {
    let totalCart = cart.reduce((acc, item) => {
      if (item.quantity != 0) {
        return acc + item.price * item.quantity;
      } else {
        return acc + item.price;
      }
    }, 0);
    if (isDiscountApplied === 10) {
      totalCart = totalCart - totalCart * 0.1;
    }
    if (isDiscountApplied === 20) {
      totalCart = totalCart - totalCart * 0.2;
    }
    if (isDiscountApplied === 30) {
      totalCart = totalCart - totalCart * 0.3;
    }

    return setTotal(totalCart);
  };
  useEffect(() => {
    reacalculateTotal();
  }, [total, isDiscountApplied, cart]);

  const handleDiscount = () => {
    if (inputDiscount === "DISC10") {
      setIsDiscountApplied(10);
    } else if (inputDiscount === "DISC20") {
      setIsDiscountApplied(20);
    } else if (inputDiscount === "DISC30") {
      setIsDiscountApplied(30);
    } else return alert("Invalid discount code");
  };

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
              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
              >
                <AccordionComponent title="Discount">
                  <Grid
                    container
                    item
                    xs={12}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={8}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        size="small"
                        onChange={(e) => setInputDiscount(e.target.value)}
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={4}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button sx={styles.button} onClick={handleDiscount}>
                        Apply
                      </Button>
                    </Grid>
                  </Grid>
                </AccordionComponent>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
              >
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
                {isDiscountApplied !== 0 && (
                  <Grid item xs={12}>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold", marginBottom: 2 }}
                      textAlign="center"
                    >
                      Descuento aplicado: {isDiscountApplied}%
                    </Typography>
                  </Grid>
                )}
                <Typography
                  variant="h5"
                  sx={[styles.title, { marginBottom: 2 }]}
                >
                  Total:
                </Typography>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                  {total.toFixed(2)}
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
