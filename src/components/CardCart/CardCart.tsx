/* eslint-disable @next/next/no-img-element */
import { Box, Card, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { FC } from "react";
import Counter from "../Counter/Counter";
import { useShoppingCart } from "../../features/ShoppingCart/context/ShoppingCartProvider";
import { ShoppingCartItem } from "../../features/ShoppingCart/reducer/shoppingCartReducer";

interface Props {
  item: ShoppingCartItem;
}

const CardCart: FC<Props> = ({ item }) => {
  const {
    actions: {
      increaseOneProductToCart,
      decrementOneProductToCart,
      removeItem,
      getItemQuantity,
    },
  } = useShoppingCart();

  const handleRemove = () => {
    if (getItemQuantity(item.product) > 0) {
      decrementOneProductToCart(item.product);
    }
    if (getItemQuantity(item.product) === 1) {
      removeItem(item.product);
    }
  };
  return (
    <Box mt={2} sx={{ width: "90%", minHeight: 80 }}>
      <Card sx={{ display: "flex", minHeight: 80 }}>
        <Grid container item xs={2} justifyContent="center" alignItems="center">
          <img
            alt="prueba"
            style={{ maxWidth: '90%', maxHeight: "95%" }}
            src={item.product.image}
            data-testid="image-cardcart"
          />
        </Grid>
        <Grid
          container
          item
          xs={6}
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
          paddingLeft={3}
        >
          <Typography sx={style.title}>{item.product.name}</Typography>
          <Counter
            count={item.quantity}
            onClickAdd={() => increaseOneProductToCart(item.product)}
            onClickRemove={() => handleRemove()}
          />
        </Grid>
        <Grid container item xs={3} alignItems="center" justifyContent="center">
          <Typography>${item.product.price}</Typography>
        </Grid>
        <Grid container item xs={1} alignItems="center">
          <IconButton onClick={() => removeItem(item.product)} sx={style.icon}>
            <DeleteIcon sx={style.icon} />
          </IconButton>
        </Grid>
      </Card>
    </Box>
  );
};

const style = {
  title: {
    fontSize: 12,
  },
  icon: {
    display: "flex",
    alignItems: "center",
    width: 18,
    height: 17,
    marginRigth: 1,
  },
};

export default CardCart;
