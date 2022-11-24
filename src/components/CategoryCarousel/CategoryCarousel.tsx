import React, { FC, useMemo } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import CategoryCard from "../CategoryCard/CategoryCard";


interface Props {
  data: string[];
}
const CategoryCarousel: FC<Props> = ({ data }) => {


  return (
    <Carousel
      autoplay
      autoplayInterval={5000}
      pauseOnHover
      speed={1000}
      wrapAround
      style={{
        height: 440,
        borderStyle: "solid",
        borderWidth: 1,
      }}
    >
      {data.map((category) => (
        <CategoryCard
          categoryName={category}
          key={category}
          data-testid={`${category}-id`}
        />
      ))}
    </Carousel>
  );
};

export default CategoryCarousel;
