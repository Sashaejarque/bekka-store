/* eslint-disable @next/next/no-img-element */
import { Box, Card, Grid, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";
import Counter from "../Counter/Counter";
import DeleteIcon from "@mui/icons-material/Delete";
import { useShoppingCart } from "../../context/ShoppingCartContext";

interface Props {
  id: number;
  quantity: number;
  price: number;
  image: string;
  title: string;
}
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

const CardCart: FC<Props> = ({ image, title, quantity, price, id }) => {
  const { removeFromCart, addToCart, decreaseCartQuantity } = useShoppingCart();

  return (
    <Box mt={2} sx={{ width: "90%", minHeight: 80 }}>
      <Card sx={{ display: "flex", minHeight: 80 }}>
        <Grid container item xs={2} justifyContent="center" alignItems="center">
          <img
            alt="prueba"
            style={{ maxWidth: 75, maxHeight: 60 }}
            src={image}
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
          <Typography sx={style.title}>{title}</Typography>
          <Counter
            count={quantity}
            onClickAdd={() => addToCart(id, quantity + 1, price, image, title)}
            onClickRemove={() => decreaseCartQuantity(id)}
          />
        </Grid>
        <Grid container item xs={3} alignItems="center" justifyContent="center">
          <Typography>${price}</Typography>
        </Grid>
        <Grid container item xs={1} alignItems="center">
          <IconButton onClick={() => removeFromCart(id)} sx={style.icon}>
            <DeleteIcon sx={style.icon} />
          </IconButton>
        </Grid>
      </Card>
    </Box>
  );
};

export default CardCart;
