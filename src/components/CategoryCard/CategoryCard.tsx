import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { FC, useMemo } from "react";
import useResponsiveScreen from "../../hooks/useResponsiveScreen";

interface images {
  electronics: string;
  jewelery: string;
  "men's clothing": string;
  "women's clothing": string;
}
interface Props {
  categoryName: string;
}

const CategoryCard: FC<Props> = ({ categoryName }) => {
  const textFormatted = `${categoryName[0].toUpperCase()}${categoryName.slice(
    1
  )}`;
  const handleRoute = (categoryName: String) => {
    if (categoryName === "men's clothing") {
      return "/categories/men-clothing";
    }
    if (categoryName === "women's clothing") {
      return "/categories/women-clothing";
    }
    return `/categories/${categoryName}`;
  };

  const { width } = useResponsiveScreen();
  const responsiveWidth = useMemo(() => width * 0.8, [width]);

  // the backend does not bring the images by category. That's why the hardcode
  const categoryImages: images = {
    electronics:
      "https://img.freepik.com/fotos-premium/concepto-compras-linea-sobre-productos-electronicos-aparatos-periodo-promocion-moderno-nuevos-modelos-consiste-auriculares-telefono-vr-drones-tarjeta-credito-sobre-fondo-amarillo-renderizado-3d-realista_156429-3719.jpg",
    jewelery:
      "https://p4.wallpaperbetter.com/wallpaper/845/750/470/jewelry-gold-diamonds-heap-wallpaper-preview.jpg",
    "men's clothing":
      "https://i.pinimg.com/736x/28/26/41/28264128d8b76b5529326c9da781ee01.jpg",
    "women's clothing":
      "https://img.freepik.com/vector-gratis/banners-rebajas-moda-fotografia_52683-9828.jpg?w=2000",
  };
  return (
    <Card sx={{ height: 500 }}>
      <CardMedia
        component="img"
        height="300"
        image={categoryImages[categoryName as keyof images]}
        alt={categoryName}
        sx={{ maxHeight: 500, maxWidth: responsiveWidth }}
      />
      <CardContent>
        <Grid
          container
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Typography style={styles.title} textAlign="center">
            {textFormatted}
          </Typography>
          <Button size="small" style={styles.button}>
            <Link href={handleRoute(categoryName)}>See more</Link>
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

const styles = {
  title: {
    fontSize: 24,
    fontWeight: 600,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: "black",
    color: "white",
  },
};

export default CategoryCard;
