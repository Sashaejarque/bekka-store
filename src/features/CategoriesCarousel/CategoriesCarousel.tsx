import { CircularProgress, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryCarousel from "../../components/CategoryCarousel/CategoryCarousel";
import { getCategories } from "../../services/categories";

const CategoriesCarousel = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const categories = await getCategories();
        setCategoriesList(categories.data);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
    })();
  }, []);

  return (
    <>
      <Grid container item xs={12} justifyContent="center" mt={6}>
        <Typography sx={{ fontWeight: 600, fontSize: 40 }}>
          All categories
        </Typography>
      </Grid>
      {loading ? (
        <Grid container justifyContent="center" alignItems="center" mt={4}>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container item xs={12} justifyContent="center">
          <CategoryCarousel data={categoriesList} />
        </Grid>
      )}
      <Grid container item xs={12} justifyContent="center">
        <Divider sx={{ width: "90%" }} />
      </Grid>
    </>
  );
};

export default CategoriesCarousel;
