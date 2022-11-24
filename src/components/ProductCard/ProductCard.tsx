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
import { useShoppingCart } from "../../features/ShoppingCart/context/ShoppingCartProvider";
import Products from "../../models/Product";
import Counter from "../Counter/Counter";

interface Props {
  item: Products;
}

const ProductCard: FC<Props> = ({ item }) => {
  const {
    state: { items },
    actions: {
      addProductToCart,
      increaseOneProductToCart,
      decrementOneProductToCart,
      getItemQuantity,
      removeItem,
      resetItemQuantity,
    },
  } = useShoppingCart();
  const [quantity, setQuantity] = useState(getItemQuantity(item));
  const [showCounter, setShowCounter] = useState(quantity > 0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (getItemQuantity(item) > 0) {
      setQuantity(quantity - 1);
      decrementOneProductToCart(item);
    }
    if (quantity === 1) {
      removeItem(item);
      setShowCounter(false);
    }
  };

  const handleAddProductToCart = () => {
    if (quantity > 1) {
      resetItemQuantity(item);
    }
    addProductToCart(item);
    setQuantity(1);
    setShowCounter(true);
  };

  useEffect(() => {
    setQuantity(getItemQuantity(item));
  }, [items, getItemQuantity, item]);

  return (
    <Card sx={style.cardContainer} data-testid="product-card">
      <div style={style.containerImage}>
        <CardMedia
          component="img"
          image={item.image}
          alt={item.title}
          sx={{ maxHeight: 200, objectFit: "contain", maxWidth: 300 }}
          data-testid="image"
        />
      </div>
      <CardContent>
        <Typography textAlign="center" data-testid="titleProduct">
          {item.title}
        </Typography>
        <Typography textAlign="center" data-testid="priceProduct">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center" paddingBottom={2}>
          {showCounter && quantity > 0 && (
            <Counter
              count={quantity}
              onClickAdd={() => {
                increaseOneProductToCart(item);
                handleAdd();
              }}
              onClickRemove={() => handleRemove()}
              data-testid="counter"
            />
          )}
          <Button
            sx={[style.button, { backgroundColor: "black" }]}
            size="small"
            onClick={() => handleAddProductToCart()}
            data-testid="addButtonProduct"
          >
            <Typography sx={{ color: "white" }}>Add to cart</Typography>
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

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

export default ProductCard;
