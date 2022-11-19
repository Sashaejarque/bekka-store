import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import Counter from "../Counter/Counter";

interface Props {
  image: string;
  title: string;
  price: number;
  id: number;
}
const style = {
  containerImage: {
    width: "100%",
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    "&:hover": {
      backgroundColor: "orange",
    },
    marginLeft: 2,
  },
  cardContainer: {
    width: 300,
    minHeight: 400,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
};
const ProductCard: FC<Props> = ({ image, title, price, id }) => {
  const { addToCart, getItemQuantity } = useShoppingCart();

  const [quantity, setQuantity] = useState(getItemQuantity(id));
  const [showCounter, setShowCounter] = useState(quantity > 0 );

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <Card sx={style.cardContainer}>
      <div style={style.containerImage}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ maxHeight: 200, objectFit: "contain", maxWidth: 300 }}
        />
      </div>
      <CardContent>
        <Typography textAlign="center">{title}</Typography>
        <Typography textAlign="center">${price}</Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center" paddingBottom={2}>
          { showCounter && (
            <Counter
              count={quantity}
              onClickAdd={() => { addToCart(id, quantity + 1, price, image, title); handleAdd(); }}
              onClickRemove={() => {handleRemove(); handleRemove() }}
            />
          )}
          <Button
            sx={[style.button, { backgroundColor: "black" }]}
            size="small"
            onClick={() => {
              addToCart(id, 1, price, image, title);
              setQuantity(1);
              setShowCounter(true);
            }}
          >
            <Typography sx={{ color: "white" }}>Add to cart</Typography>
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
