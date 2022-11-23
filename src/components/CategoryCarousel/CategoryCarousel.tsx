import React, { FC, useMemo } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import CategoryCard from "../CategoryCard/CategoryCard";
import useResponsiveScreen from "../../hooks/useResponsiveScreen";

interface Props {
  data: string[];
}
const CategoryCarousel: FC<Props> = ({ data }) => {
  const { width } = useResponsiveScreen();
  const responsiveWidth = useMemo(() => width * 0.8, [width]);

  return (
    <Carousel
      style={{
        height: 440,
        width: responsiveWidth,
        borderStyle: "solid",
        borderWidth: 1,
      }}
    >
      {data.map((category) => (
        <CategoryCard categoryName={category} key={category} data-testid={`${category}-id`}/>
      ))}
    </Carousel>
  );
};

export default CategoryCarousel;
