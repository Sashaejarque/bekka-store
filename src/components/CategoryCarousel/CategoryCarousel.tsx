import React, { FC } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import CategoryCard from "../CategoryCard/CategoryCard";
import useResponsiveScreen from "../../hooks/useResponsiveScreen";

interface Props {
  data: string[];
}
const CategoryCarousel: FC<Props> = ({ data }) => {
  const { width } = useResponsiveScreen();
  const responsiveWidth = width * 0.8;
  return (
    <Carousel
      style={{ height: 440, width: responsiveWidth }}
    >
      {data.map((category) => (
        <CategoryCard categoryName={category} key={category} />
      ))}
    </Carousel>
  );
};

export default CategoryCarousel;
