import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { FC } from "react";

interface Props {
  image: string;
  title: string;
  price: number;
}
const style = {
  containerImage: {
    width: "100%",
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
const ProductCard: FC<Props> = ({ image, title, price }) => {
  return (
    <Card sx={{ width: 300, minHeight: 400 }}>
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
        <Grid container justifyContent="center">
          <Button size="small">Add to cart</Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
